import pickle
import streamlit as st
import numpy as np
import os
import re
from difflib import SequenceMatcher


st.header('FLIXPICKS')


model = pickle.load(open('/Users/dikshantthapa/Desktop/FLIXPICKS/Notebook/model.pkl', 'rb'))
movie_names = pickle.load(open('/Users/dikshantthapa/Desktop/FLIXPICKS/Notebook/movie_name.pkl', 'rb'))
final_rating = pickle.load(open('/Users/dikshantthapa/Desktop/FLIXPICKS/Notebook/final_ratings.pkl', 'rb'))
movie_pivot = pickle.load(open('/Users/dikshantthapa/Desktop/FLIXPICKS/Notebook/movie_pivot.pkl', 'rb'))


THUMBNAIL_FOLDER = '/Users/dikshantthapa/Desktop/FLIXPICKS/Notebook/thumbnails/'  
DEFAULT_THUMBNAIL = os.path.join(THUMBNAIL_FOLDER, 'noTHUMB.png')  


if not os.path.exists(DEFAULT_THUMBNAIL):
    st.error(f"Default thumbnail not found at {DEFAULT_THUMBNAIL}")
else:

    def normalize_title(title):
        return re.sub(r'\W+', '', title.lower())  


    def similarity_ratio(a, b):
        return SequenceMatcher(None, a, b).ratio()


    def fetch_poster(suggestion):
        movie_names = [movie_pivot.index[movie_id] for movie_id in suggestion[0]]
        poster_paths = []

        for name in movie_names:
            normalized_name = normalize_title(name)
            thumbnail_found = False

            for filename in os.listdir(THUMBNAIL_FOLDER):
                if similarity_ratio(normalized_name, normalize_title(os.path.splitext(filename)[0])) >= 0.9:
                    poster_paths.append(os.path.join(THUMBNAIL_FOLDER, filename))
                    thumbnail_found = True
                    break

            if not thumbnail_found:
                poster_paths.append(DEFAULT_THUMBNAIL)

        return poster_paths


    def recommend_movie(movie_name):
        movie_id = np.where(movie_pivot.index == movie_name)[0][0]
        distance, suggestion = model.kneighbors(movie_pivot.iloc[movie_id, :].values.reshape(1, -1), n_neighbors=6)

        poster_paths = fetch_poster(suggestion)
        movies_list = [movie_pivot.index[suggestion[0][i]] for i in range(len(suggestion[0]))]

        return movies_list, poster_paths


    selected_movie = st.selectbox(
        "Type or select a movie from the dropdown",
        movie_names
    )


    if st.button('Show Recommendation'):
        recommended_movies, poster_paths = recommend_movie(selected_movie)
        

        st.markdown(f'### Selected Movie')
        st.image(poster_paths[0])
        st.markdown(f'<marquee behavior="scroll" direction="left">{selected_movie}</marquee>', unsafe_allow_html=True)
        

        st.markdown(f'### Recommended Movies')
        cols = st.columns(5)
        for i in range(5):
            with cols[i]:
                movie_name = recommended_movies[i]
                st.markdown(f'<marquee behavior="scroll" direction="left">{movie_name}</marquee>', unsafe_allow_html=True)
                st.image(poster_paths[i])
