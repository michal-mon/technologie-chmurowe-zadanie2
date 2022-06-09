<h1>Technologie Chmurowe - Zadanie 2</h1>
<h2>Autor: Michał Moń</h3>
<h4>Opis poszczególnych elementów i wprowadzonych zmian w aplikacji:</h4>
<h5>Element "client":</h5>
<p>Element ten zostaje wyświetlony użytkownikowi jako strona główna z tytułem, informacją o autorze oraz dwoma linkami:</p>
<ul>
  <li>GS Cal (kalkulator ciągu geometrycznego)</li>
  <li>Documentation</li>
</ul>
<h6>GS Cal:</h6>
<p>Po kliknięciu w link użytkownikowi zostaje wyświetlony kalkulator ciągu geometrycznego 2^k (komponent "GSCal"). Użytkownik może wprowadzić liczbę w zakresie od 1 do 10 (w przypadku podania liczby spoza tego zakresu jako wynik zostanie zwrócony błąd). Po wciśnięciu przycisku "Zatwierdź" wprowadzona liczba zostaje wysłana do serwera. Na stronie jest wyświetlona również historia 5 ostatnich wprowadzonych współczynników "k" oraz wyliczonych wartości ciągu dla podanych współczynników "k". <br/><b>Po wysłaniu współczynnika k do serwera, aby została wyświetlona obliczona dla niego wartość należy odświeżyć stronę!</b></p>
<h6>Documentation:</h6>
<p>Strona z dokumentacją - kopia tego pliku README.md (komponent "Documentation")</p>
<h5>Element "api":</h5>
<p>Z wykorzystaniem serwera (api) tworzona jest nowa tabela w bazie danych, która zawiera pola:</p>
<ul>
  <li>INT k - współczynnik ciągu</li>
  <li>TIMESTAMP ts - timestamp, przechowuje czas dodania nowego rekordu do bazy danych</li>
</ul>
<p>Po dodaniu nowego wpisu do Redisa zostaje wysłana wiadomość, aby "poinformować" workera o pojawieniu się nowego współczynnika "k", dla którego zostaną wykonane obliczenia.</p>
<h5>Element "worker":</h5>
