---
layout: post
tags: programming
title: Your Own Speed
---

As part of my [new year inspiration](/2026/01/01/joyful-beginnings-with-ruby.html) to be a Ruby programmer, I'm inspired to share what I've been learning. Today marks a full week of daily practice, and it's been quite rewarding. At present, [X](https://x.com/) has become infiltrated with AI talk&mdash;many people even sharing sentiments around the obsolescence of manually writing programs altogether. Though I find AI useful as a small reasoning tool&mdash;something like `sed` or `grep`&mdash;my present belief is that the ecosystem has an overall negative effect on human development in the future. I'm open and would love for that to be wrong. Regardless, this is my North Star to guide through the noise:

> Move at your own speed, because no one can take the joy of concentration away from you.

There is something unmistakably great about moving towards competency in a language, or any tool for that matter. And while tools ultimately don't define us, they can inspire and deeply shape us. Exercising our humanness means to give meaning to things and fully invest. Here are some parts of Ruby that I find meaningful.

## All About Data

I've spent several hours learning about the various data types: numbers, strings, symbols, and booleans. There are so many methods for working with them too, like `.even?` and `.length`. Storing data in arrays and hashes and looping through them was the next progression.

## A Developer's Dictionary

Hashes are these advanced collections of data stored in key-value pairs, acting like a dictionary. They can store any kind of data, too.

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

You can nest them too. Accessing values is just like arrays.

```ruby
vehicles = {
  donnie: {year: 2001, make: "Toyota", model: "Tacoma"},
  grace: {year: 2000, make: "Volvo", model: "V70"},
  jon: {year: 1986, make: "Volkswagen", model: "Vanagon"}
}

vehicles[:donnie][:year] #=> 2001
```

## Enumerables Are Poetry

Loops that managed variables, condition checks, and explicit mutation suddenly became poetry&mdash;methods that express intent and look readable.

```ruby
numbers = [3, 6, 9, 12]

result = numbers
  .map { |n| n * 2 } # Map the numbers and double them.
  .select { |n| n > 10 } # Select the ones greater than 10.

puts result #=> [12, 18, 24] # Put the result.
```

## Feeling Like a Hacker

Working through an example from [The Bastards Book of Ruby](http://ruby.bastardsbook.com/) (an outdated, but amazing read thus far), a lot of what I learned this week started to come together with real data. Here's a little script that uses the OpenURI module to get a few sites and count their HTML tags:

```ruby
require "open-uri"

sites = [
  "https://www.nytimes.com/",
  "https://www.youtube.com/"
]

tags = ["a", "div", "img"]

def fetch_page(url)
  URI.open(url).read
end

def count_tags(page, tag)
  page.scan(/<#{tag}\b/).length
end

sites.each do |url|
  puts "#{url} has:"
  tags.each do |tag|
    page = fetch_page(url)
    tag_count = count_tags(page, tag)
    puts "\t - #{tag_count} `<#{tag}>` tags"
  end
end
```

Running the script reports:
```
https://www.nytimes.com/ has:
         - 728 `<a>` tags
         - 2337 `<div>` tags
         - 122 `<img>` tags
https://www.youtube.com/ has:
         - 15 `<a>` tags
         - 291 `<div>` tags
         - 0 `<img>` tags
```

Okay, this is really cool! Suddenly, all these basic data structures are weaving together to make something interesting and useful. This was a big turning point in the week for me.

## Keeping the Momentum

I must mention [The Odin Project](https://www.theodinproject.com/) has been an invaluable resource for me. I'm moving forward with their object-oriented basics section, and hope to start dreaming up a few simple projects to build by the weekend. Using language to build is fun. Typing is fun (especially in [Neovim](https://neovim.io/)). Understanding and memorizing is fun. This is why I'm stoked on learning to program in 2026, even if it's at my own speed.
