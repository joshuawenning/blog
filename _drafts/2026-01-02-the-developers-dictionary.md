---
layout: post
tags: programming
title: The Developer's Dictionary
---

## Learning Hashes in Ruby

As part of my [new year inspiration](/2026/01/01/joyful-beginnings-with-ruby.html) to be a Ruby programmer, I'm inspired to share what I'm learning daily. Today was an exercise exclusively with hashes. This is by no means an definitive guide, but rather the bits and pieces of what I picked up, found useful, and wish to commit to memory. You can read all about hashes in the [Ruby docs](https://docs.ruby-lang.org/en/master/Hash.html).

## Advanced Collections of Data

A hash is a set of key-value pairs that acts like a dictionary. They're name based&mdash;an associative representation of data&mdash;though still maintain order, whereas arrays are strictly order based. They can store any sort of data type for keys and values. An example hash literal looks like this:

```ruby
my_hash = {
  "an array" => [1, 2, 3],
  7 => "seven",
  :favorite_number => 10,
  "an empty hash" => {}
}
```

This is using the hash rocket notation, where the key (first item) is assigned to a value with `=>`. Interestingly, there is another more popular and performant syntax for creating a hash, which exclusively uses symbols as keys:

```ruby
japanese_cars = {
  honda: "accord",
  nissan: "altima",
  subaru: "outback",
  toyota: "corolla"
}
```

It gets a little confusing because symbols are defined by prepending a word with a colon (e.g. `:my_symbol`), but here it's appended. Lastly, you can also create a hash using the `::new` method on the `Hash` class, like so:
```ruby
my_hash = Hash.new
```
