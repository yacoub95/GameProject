from newsapi import NewsApiClient
import pickle

# Init
newsapi = NewsApiClient(api_key='ceb47a2155124c0cb9d11e95e6b094fe')


# /v2/everything
all_articles = newsapi.get_everything(q='Apex Legends',
                                      #from_param='2017-12-01',
                                      #to='2017-12-12',
                                      language='fr',
                                      sort_by='relevancy',
                                      page=2)

# /v2/sources
sources = newsapi.get_sources()

with open("actualité.json", "w", encoding="utf-8") as fichier :
     fichier.write(sources.__str__())