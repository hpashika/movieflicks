import random;
import time 
database = [
    {"id" : 1,
    "name" : "Breaking Bad",
    "description" : "Crime thriller about drugs and professor",
    "genre" : "crime",
    "image" : "/media/breaking_bad.jpeg" },
    {"id": 2,
    "name" : "The Crown",
    "description" : "About Royal Family Politics",
    "genre" : "drama",
    "image" : "/media/the_crown.jpeg"},
    {"id": 3,
    "name" : "Ozark",
    "description" : "Crime Thriller about drugs mafia",
    "genre" : "thriller",
    "image" : "/media/ozark.jpeg"},
    {"id": 4,
    "name" : "Money Heist",
    "description" : "Crime Thriller about Bank Robbery",
    "genre" : "crime",
    "image" : "/media/money_heist.jpeg"},
    {"id" : 5,
    "name" : "Queens Gambit",
    "description" : "About Chess",
    "genre" : "drama",
    "image": "/media/queens_gambit.jpeg"},
    {"id": 6,
     "name": "Friends",
    "genre" : "comedy",
    "image" : "/media/freinds.jpeg"}
]

def browse() :
    return database;

def search(movie) :
    s_list = []
    for m in database:
        if m['name'] == movie:
            s_list.append(m)
    if len(s_list) > 0 :
        return s_list;

    return [{"message" : f"Sorry we don't have {movie}, why don't you watch Friends"}]

def streaming(movie) :
    time.sleep(random.random())
    return {'message' : 'Grab Some PopCorn and Enjoy the Show'}

def end_streaming(movie):
    return {'message' : 'Thank You !!! C U Soon'}

def genre(g):
    g_list = []
    for m in database:
        if m['genre'] == g:
            g_list.append(m)
    
    if len(g_list) > 0:
        return g_list
    
    return {"message" : f"Sorry we don't have {g} genre, why don't you watch Friends"}

def main():
    #print(browse())
    #print(search('King Kong'))
    #print(streaming('Friends'))
    print(genre('crime'))
if __name__ == "__main__":
    main()