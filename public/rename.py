location = "./img"

from glob import glob
from os import rename
from tqdm import tqdm

# if done already skip the below part
# paths = sorted(glob(location+"/*.png"))

# for path in tqdm(paths):
# 	new_name = path.replace('@2x.png','.png')
# 	rename(path, new_name)

# rename file according to the conditons
dic ={
    "Clouds":"./img/Mostly Cloudy.png",
    "Clear":"./img/Mostly Sunny.png",
    "Haze":"./img/Haze.png",
    "Hail":"./img/Hail.png",
    "Fog":"./img/Fog.png",
    "Tornado":"./img/Tornado.png",
    "Dust":"./img/Dust.png",
    "Mist":"./img/Fog.png",
    "Snow":"./img/Snow.png",
    "Rain":"./img/Rain.png",
    "Drizzle":"./img/Drizzle.png",
    "Thunderstorm":"./img/Severe Thunderstorm.png"
}

for name in tqdm(dic):
    changed_name = name
    current_name = dic[name]
    new_name = current_name.replace(current_name, "./img/" +changed_name+".png")
    print(changed_name)
    print(current_name)
    print(new_name)
    rename(current_name, new_name)
