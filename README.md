# CAS FEE Projekt Arbeit 2: Insight

## Umfang
* Implementiert wurde das Mitarbeiter (Employees) Modul.
* Es sollte auf eine gute Strukturierung mit Feature Moduls geachtet werden.
* Fokus auf clean code (DRY, KISS, YAGI, SOLID)
* User Tests / Evaluation von UX wurde nicht gewünscht (auch aus Zeitgründen seitens des Auftraggebers nicht). Der existierende Workflow wurde vom Auftraggeber als gut befunden.
* Responsive Design war keine Anforderung. Jedoch wurden eine minimale Funktionalität an Responsivness implementiert.
* API existiert (asp.net web api), wurde aber zum Teil angepasst.
* Die Authentisierung läuft über Kerberos (Windows). Ist aber in der Demo abgeschalten, da der Demo Server nicht mit dem Active Directory der Firma verbunden ist.

# Funktion
* Auf der Mitarbeiter Ansicht können Mitarbeiter mittles verschiedenen Filtern gesucht werden.
* Die Filter Einstellungen können persistiert (gebookmarket) werden, da ihr state in der URL reflektiert ist.
* Es existiert auch eine globale Suche, die im Header verfügbar ist. Suchresultate werden nach Kategorien gruppiert (z.B. nach Java suchen damit man die Gruppierung sehen kann).
* Klickt man auf einen Mitarbeiter in der Tabelle werden die Details zum Mitarbeiter angezeigt (damit man was sieht, am besten folgende Mitarbeiter wählen: Christian Moser oder Markus Leder)
* In den Mitarbeiter Details kann man aus "Details", "Further Develompment" und "Project History" auswählen.
* Einige E2E sowie Unit Tests sind vorhanden.

# Sonstiges
* rxjs wurde viel eingesetzt (debounceTime, forkJoin, combineLatest, mergeMap, ...).
* Violett ist Company Identity Farbe. Logos werden noch geliefert.
