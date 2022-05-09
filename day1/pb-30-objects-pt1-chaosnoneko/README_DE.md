# Objects: Teil 1

Bitte drucke jede deiner Antworten auf der Konsole aus.

**1. Objekt Person.**
Erstelle ein Objekt namens person. Führe eine Schleife durch das Objekt und drucke sowohl die Eigenschaft als auch den Wert des Objekts aus.

**2. Get Values.**
Erstelle eine Funktion, die ein Array mit allen **Werten** der Eigenschaften eines Objekts zurückgibt.
* Beispiele:
```javascript
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
```
* Erwartete Ausgabe:
```javascript
["tea", "coffee", "milk"] 
```

**3. Füge eine Methode hinzu.**
Erstelle ein Objekt und füge eine Methode zu diesem Objekt hinzu, die die Werte der Objekte in einer Zeichenkette ausgibt.
* Beispiel
```javascript
let person = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: "Paris"
}
```
* Beispiel für die erwartete Ausgabe
"Michael Smith is a 20 year old driver in Paris".

## Bonusfragen

**1. Konvertiere Schlüssel und Werte in ein Array.**
Erstelle eine Funktion, die ein Objekt in ein Array aus Schlüsseln und Werten umwandelt.
* Beispiele:
```javascript
objectToArray({
  A: 1,
  B: 2,
  C: 3
}) 
```
* Erwartete Ausgabe:
```javascript
[["A", 1], ["B", 2], ["C", 3]]
```

```javascript
objectToArray({
  cats: 1,
  dogs: 2, 
  turtles: 4
}) 
```
* Erwartete Ausgabe:
```javascript
[["cats", 1], ["dogs", 2], ["turtles", 4]] 
```

**2. Eigenschaften auflisten.**
Erstelle eine Funktion, die ein Array von **Eigenschaften** eines Javascript-Objekts zurückgibt.
* Beispiel
```javascript
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}
```
* Erwartete Ausgabe:
```javascript
["name", "class", "course"]
```

**3. Verschmelzen.**
Erstelle eine Funktion, die zwei Objekte als Parameter nimmt und sie zu einem neuen Objekt zusammenführt.
* Beispiel
```javascript
let first = {firstName: "John"}
let last = {lastName: "Smith"}
```
* Expected output:
```javascript
{firstName: "John", lastName: "Smith"}
```
**Extra Credit:** Was passiert, wenn du zwei Objekte mit denselben Eigenschaftswerten zusammenführst? Erwartet ihr beim Zusammenführen dieser beiden Objekte, dass ihr eines oder beide der ursprünglichen Objekte verändert? Warum oder warum nicht? Kommentiere deine Antworten.

**4. Tausche Schlüssel und Werte.**
Erstelle eine Funktion, um eine Kopie eines Objekts zu erhalten. Die Kopie muss die Schlüssel und Werte vertauschen.
* Beispiel:
```javascript
let person = {
  name: "John", 
  job: "teacher"
}
```
* Erwartete Ausgabe:
```javascript
{John: "name", teacher: "job"}
```

**5. Rückgabe von Schlüsseln und Werten.**
Schreibe ein Programm, das ein Objekt annimmt und ein Array zurückgibt, das zwei Arrays enthält: eines für die Schlüssel des Objekts und das andere für die Werte des Objekts.

* Beispiele:
```javascript
{ a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
{key: true} ➞ [["key"], [true]]
```
