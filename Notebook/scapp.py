import requests
import pandas as pd
import os
import time

API_KEY = '385dc36c50bcd6992b9fca01b1f70160'

def get_movie_poster(movie_name):
    search_url = f"https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={movie_name}"
    try:
        response = requests.get(search_url)
        response.raise_for_status()
        data = response.json()
        if data['results']:
            poster_path = data['results'][0]['poster_path']
            if poster_path:
                return f"https://image.tmdb.org/t/p/w500{poster_path}"
    except requests.exceptions.RequestException as e:
        print(f"Error fetching poster for {movie_name}: {e}")
    return None

def download_image(url, save_path):
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        with open(save_path, 'wb') as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)
    except requests.exceptions.RequestException as e:
        print(f"Failed to download image from {url}: {e}")

def process_batch(df_batch, results):
    for index, row in df_batch.iterrows():
        movie_name = row['title']
        print(f"Fetching poster for {movie_name}")
        
        image_url = get_movie_poster(movie_name)
        if image_url:
            print(f"Found poster for {movie_name}: {image_url}")
            sanitized_name = ''.join(e for e in movie_name if e.isalnum() or e in "._- ")
            save_path = os.path.join('thumbnails', f"{sanitized_name}.jpg")
            
            # Check if the thumbnails folder exists
            if not os.path.exists('thumbnails'):
                os.makedirs('thumbnails', exist_ok=True)
            
            download_image(image_url, save_path)
            results.append({'title': movie_name, 'image_url': image_url})
        else:
            print(f"Could not find poster for {movie_name}")
        time.sleep(1)

    # Save results to an Excel file after processing each batch
    results_df = pd.DataFrame(results)
    results_df.to_csv('found_movie_thumbnails.csv', index=False)
    print("Results for this batch saved to found_movie_thumbnails.csv")

def main():
    csv_path = '/Users/dikshantthapa/Desktop/FLIXPICKS/Data/movies.csv'
    df = pd.read_csv(csv_path)
    
    if 'title' not in df.columns:
        print("CSV file must contain a column named 'title'")
        return

    batch_size = 100
    num_batches = len(df) // batch_size + (1 if len(df) % batch_size != 0 else 0)
    results = []

    for batch_num in range(num_batches):
        start_index = batch_num * batch_size
        end_index = min((batch_num + 1) * batch_size, len(df))
        df_batch = df.iloc[start_index:end_index]
        print(f"Processing batch {batch_num + 1} of {num_batches}")
        process_batch(df_batch, results)
        print(f"Completed batch {batch_num + 1} of {num_batches}")
        time.sleep(5) 

if __name__ == '__main__':
    main()
