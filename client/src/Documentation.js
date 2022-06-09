import React from 'react';
import { Link } from 'react-router-dom';
import arch from './arch.png';

export default () => {
  return (
    <div>
      <Link to="/">Go back home</Link>
      <h1>Technologie Chmurowe - Zadanie 2</h1>
      <h3>Autor: Michał Moń</h3>
      <h4>Opis poszczególnych elementów i wprowadzonych zmian w aplikacji:</h4>
      <h5>Element "client":</h5>
      <p>Element ten zostaje wyświetlony użytkownikowi jako strona główna z tytułem, informacją o autorze oraz dwoma linkami:</p>
      <ul>
        <li>GS Cal (kalkulator ciągu geometrycznego)</li>
        <li>Documentation</li>
      </ul>
      <h6>GS Cal:</h6>
      <p>Po kliknięciu w link użytkownikowi zostaje wyświetlony kalkulator ciągu geometrycznego 2^k (komponent "GSCal"). Użytkownik może wprowadzić liczbę w zakresie od 1 do 10 (w przypadku podania liczby spoza tego zakresu jako wynik zostanie zwrócony błąd). Po wciśnięciu przycisku "Zatwierdź" wprowadzona liczba zostaje wysłana do serwera. Na stronie jest wyświetlona również historia 5 ostatnich wprowadzonych współczynników "k" oraz wyliczonych wartości ciągu dla podanych współczynników "k". <br/><b>Po wysłaniu współczynnika k do serwera, aby została wyświetlona obliczona dla niego wartość należy odświeżyć stronę!</b></p>
      <h5>Element "api":</h5>
      <p>Z wykorzystaniem serwera (api) tworzona jest nowa tabela w bazie danych, która zawiera pola:</p>
      <ul>
        <li>INT k - współczynnik ciągu</li>
        <li>TIMESTAMP ts - timestamp, przechowuje czas dodania nowego rekordu do bazy danych</li>
      </ul>
      <p>Po dodaniu nowego wpisu do Redisa zostaje wysłana wiadomość, aby "poinformować" workera o pojawieniu się nowego współczynnika "k", dla którego zostaną wykonane obliczenia.</p>
      <h5>Element "worker":</h5>
      <p>Worker po otrzymaniu informacji z elementu "api" o pojawieniu się nowego współczynnika jest wykonuje obliczenia i aktualizuje wartości w bazie danych.</p>
      <h5>Element "nginx":</h5>
      <p>Serwer "nginx" został skonfigurowany jako reverese-proxy.</p>
      <h4>Opis Dockerfile:</h4>
      <h5>Element "client":</h5>
      <p><b>Dockerfile.dev</b> pozostał bez zmian, natomiast w przypadku <b>Dockerfile</b> builder jako obraz bazowy wykorzystuje obraz <b>node:alpine</b> do zbudowania aplikacji, natomiast w drugim etapie wykorzystywany jest "czysty" obraz <b>alpine</b>, na którym zostaje zainstalowany i skonfigurowany serwer nginx, a aplikacja z etapu pierwszego zostaje skopiowana (analogicznie do pierwotnego pliku <b>Dockerfile</b>). </p>
      <h5>Element "api":</h5>
      <p><b>Dockerfile</b> i <b>Dockerfile.dev</b> dla elementu "api" nie uległy zmianom.</p>
      <h5>Element "worker":</h5>
      <p>Zarówno <b>Dockerfile</b> jak i <b>Dockerfile.dev</b> są analogiczne jak dla elementu "api".</p>
      <h5>Element "nginx":</h5>
      <p><b>Dockerfile</b> oraz <b>Dockerfile.dev</b> bazują na obrazie alpine, na którym zostaje zainstalowany serwer nginx z domyślną konfiguracją, a plik konfiguracyjny zostaje przeniesiony do katalogu "/etc/nginx/http.d/".</p>
      <img src={arch} alt="arch" />
    </div>
  );
};
