CURRENCY BOOLVERTER

Stiamo organizzando dei viaggi all’estero e ci farebbe tanto comodo un convertitore di valute molto veloce da usare all’occorrenza.

In una versione di base, abbiamo due input numerici e due select. L’utente può scrivere in entrambi gli input e convertire nelle valute impostate nelle select.
Le valute presenti come options nelle select sono prese dall’API Frankfurter, gratuita e utilizzabile senza API key. Ogni cambiamento in uno degli input chiama l’endpoint relativo alla conversione tra valute.

La grafica nell’anteprima è di esempio, potete realizzarla come preferite.

**Milestone 1**
Creare un componente che contenga un campo di input e una select.
Questo componente servirà sia per il primo input che per il secondo ricevendo tramite props la lista delle valute.

**Milestone 2**
Effettuare all’avvio dell’applicazione una chiamata all’API (con axios) per popolare le due select con la lista delle valute. La prima select avrà come valore selezionato di default "Euro" e la seconda "United State Dollar".

**Milestone 3**
Ogni volta che l’utente scrive qualcosa in uno dei due input bisognerà fare in modo che venga effettuata una chiamata all’API per ottenere il valore convertito nella valuta selezionata.

**Milestone 4**
Al cambio di un valore selezionato in una delle due select bisognerà effettuare una nuova chiamata all'API per ottenere il nuovo valore convertito nella valuta corretta.

**Bonus 1**
Disabilitare la currency nella select in relazione all’altra selezionata (evitare conversione su due currency uguali).

**Bonus 2**
Aggiungere un componente che contenga il grafico (potete utilizzare la libreria Apex Charts o chart.js) del rapporto dei valori delle due valute selezionate nelle due select.

**Bonus 3**
Utilizzare axios con **async**/**await** al posto della sintassi **then**/**catch**.



Questa API riceverà il valore del campo appena modificato e le due valute per la conversione quindi la chiamata avverrà al `keyup` del’input.

Nella chiamata all'API bisogna mettere in `from` la valuta selezionata e `to` l'altra.  Ad esempio, nella situazione di default se scrivo **5** nelll'input di **EUR** l'endpoint sarà: /`latest?amount=5&from=EUR&to=USD` mentre se scivo **5** nel campo relativo a **USD** l'endpoint sarà `/latest?amount=5&from=USD&to=EUR`

Diversamente, al cambio della select l’enpoint sarà sempre lo stesso ma l’ordine from/to sarà sempre in relazione al primo e secondo input

# Reference

- **API**: https://www.frankfurter.app/docs/
- **Sintassi async/await**: https://www.html.it/pag/69778/funzioni-asincrone-con-asyncawait/ (in questo articolo si parla di `fetch()` mentre per noi il discorso è in relazione a `axios().then()` , la logica è la stessa)
- **Apex Charts**: https://apexcharts.com/docs/