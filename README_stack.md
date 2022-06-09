<h1>Technologie Chmurowe - Zadanie 2</h1>
<h2>Autor: Michał Moń</h3>
<h3>Dokumentacja usługi przy uruchomieniu w klastrze Swarm:</h3>
<p>Analogicznie jak przy uruchamianiu usługi w wersji produkcyjnej wartości zmiennych pobierane są z powłoki,
zatem ponownie zostanie wykorzystany plik <b>secrets.sh</b>.</p>
<h4>Konfiguracja poszczególnych elementów usługi:</h4>
<ol>
  <li>
    <h5>postgres:</h5>
    <ul>
      <li>Liczba replik: 1</li>
      <li>Polityka restartu: restart w razie awarii</li>
      <li>Limity zasobów: minimalne: 0.25 CPU, 30M pamięci, maksymalne: 0.5 CPU, 60M pamięci</li>
      <li></li>
    </ul>
  </li>
  <li>
    <h5>redis:</h5>
    <ul>
      <li>Liczba replik: 1</li>
      <li>Polityka restartu: restart w razie awarii</li>
      <li>Limity zasobów: minimalne: 0.5 CPU, 50M pamięci, maksymalne: 1 CPU, 100M pamięci</li>
      <li></li>
    </ul>
  </li>
  <li>
    <h5>nginx:</h5>
    <ul>
      <li>Liczba replik: 2</li>
      <li>Polityka restartu: restart w razie awarii</li>
      <li>Limity zasobów: minimalne: 0.25 CPU, 10M pamięci, maksymalne: 0.5 CPU, 30M pamięci</li>
    </ul>
  </li>
  <li>
    <h5>client:</h5>
    <ul>
      <li>Liczba replik: 2</li>
      <li>Polityka restartu: restart w razie awarii</li>
      <li>Limity zasobów: minimalne: 0.25 CPU, 20M pamięci, maksymalne: 0.75 CPU, 60M pamięci</li>
    </ul>
  </li>
  <li>
    <h5>api:</h5>
    <ul>
      <li>Liczba replik: 2</li>
      <li>Polityka restartu: restart w razie awarii</li>
      <li>Limity zasobów: minimalne: 0.75 CPU, 20M pamięci, maksymalne: 1.5 CPU, 60M pamięci</li>
    </ul>
  </li>
  <li>
    <h5>worker:</h5>
    <ul>
      <li>Liczba replik: 1</li>
      <li>Polityka restartu: restart w razie awarii</li>
      <li>Limity zasobów: minimalne: 0.5 CPU, 15M pamięci, maksymalne: 1 CPU, 30M pamięci</li>
    </ul>
  </li>
</ol>
