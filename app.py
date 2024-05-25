import streamlit as st
import pickle
import pandas as pd

movies_dict = pickle.load(open('','rb'))
movies = pd.DataFrame(movies_dict)

st.title('Movie Recommender System')

option = st.selectbox(
    'Movies:',
    movies['title'].values
)