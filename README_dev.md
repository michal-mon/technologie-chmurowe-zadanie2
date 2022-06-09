<h1>Technologie Chmurowe - Zadanie 2</h1>
<h2>Autor: Michał Moń</h3>
<h4>Dokumentacja usługi w wersji deweloperskiej:</h4>
<p>Kontekst potrzebny do zbudowania obrazów usługi znajduje się w pliku <b>docker-compose.dev.yml</b>, natomiast do budowania 
  używane są pliki <b>Dockerfile.dev</b> w katalogach poszczególnych elementów aplikacji. Dla zwiększenia elastyczności i przejrzystości 
  zmienne środowiskowe zostały przeniesione do katalogu <b>".config/dev/"</b>.</br></br>
  Plik <b>docker-compose.dev.yml</b> definiuje sieci:</p>
<ul>
  <li>frontend</li>
  <li>backend</li>
</ul>
<p>Do sieci <b>frontend</b> podłączony jest serwer <b>nginx</b>, który wystawia port 3050. Wszystkie kontenery są podłączone do sieci <b>backend</b>.</p>

<h4>Użyte polecenie i uruchomienie usługi:</h4>

<b>docker compose -f docker-compose.dev.yml up</b> (wykonane w katalogu z odpowiednim plikiem)

<img src="./tch-z2-screenshots/dev0.png"/>
<img src="./tch-z2-screenshots/dev1.png"/>
<img src="./tch-z2-screenshots/dev2.png"/>
<img src="./tch-z2-screenshots/dev3.png"/>
<img src="./tch-z2-screenshots/dev5.png"/>
  
  
 
