import urllib.request
import os

os.makedirs('public/pests', exist_ok=True)

images = {
    'ants.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ant_Macro.jpg/800px-Ant_Macro.jpg',
    'gecko.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Tarentola_mauritanica_2.jpg/800px-Tarentola_mauritanica_2.jpg',
    'bedbug.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cimex_lectularius.jpg/800px-Cimex_lectularius.jpg',
    'termites.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Termite_Soldier_and_Worker.jpg/800px-Termite_Soldier_and_Worker.jpg',
    'pest-control.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Pest_Control_Service_Worker.jpg/800px-Pest_Control_Service_Worker.jpg'
}

for filename, url in images.items():
    try:
        urllib.request.urlretrieve(url, f'public/pests/{filename}')
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")

