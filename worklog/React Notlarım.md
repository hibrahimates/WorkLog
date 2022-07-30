# REACT NOTLAR

## Kavramlar
Şu kavramları anladım diyen bir kişinin sanıyorum sadece pratiğe ihtiyacı vardır.
Component, State, Prop, Callback, Hook, Routes | From, List, Key, Ref, ContextAPI, Redux, Arrays

### Component
React'ta temel yapı taşı, en temel birim Component'lerdir.
İki çeşit Component var, function Component ve class Component
Fonction sanki daha sade, kullanımı kolay ve şık duruyor. React dokümanında da zaten function kullanın diye önermiş.
Componentler bir kez hazırlanır ve tekrar tekrar kullanılabilir.
Componentleri aynı ailede tutmak için onları sarmalayan, davranışı ve görseli olmayan ara katmanlar (Wrapping Component) yazılabilir. Onlar da yine Component'tir ama görevi aynı aileden olanları bir arada tutmaktır, bir görsel ya da davranış sahibi değildirler. Bu Component'leri tanımlarken sadece bu sarmayalan Component'i tanımlarız, böylece daha üstteki parent Component de daha sade ve okunaklı olur. Hem de bu ilişkili Component'ler aynı anda hareket etmiş olur.

### Prop
>> Prop Destruction, Prop Drilling
Componentler proplar aracılığı ile içlerine okunacak bir değer ya da çağrılacak bir metod alırlar.
Eğer değer aldıysalar,
  Bunun üzerine yeni değer atayamazlar, sadece onu okurlar. Bu parent Component'in child Component'e değer aktarmasını sağlar. Yukarıdan aşağı değer paylaşımı böyle yapılır.
  Parent-Child ilişkisinin çok olduğu durumlarda, yukarıdan aşağı doğru prop geçme işi bir çok Component üzerinden gerçekleşiyorsa buna da Prop Drilling deniyor (iyi bişey değil). Bu durumda arada hiç kullanmadığı, ihyiyacı olmadığı halde prop taşıyan ara Componentler oluyor. Bu istenmeyen bir şey ve engellemek için de bu değer aktarımı prop ile değil de ContextAPI ile sağlanıyor.
Eğer metod aldıysalar,
  O zaman bu propu üzerinde metod çağrısı yaparlar ve ellerindeki değeri, bu metodu prop olarak geçen parent Component'e geçerler. Buna Callback deniyor.

### Callback
Callback,

### State
>> useState
state'ler

### Hook
>> useState, useEffect, createContext, useContext

### Routes

### From

### List

### Key

### Ref

### ContextAPI

### Redux

### Arrays


## Prensipler


## Best Practice

