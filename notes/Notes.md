<style>
    
    img {
        display: block;
        margin: 50px auto;
        max-height: 400px;
    }
</style>

# Asking for Help

## Tips for Getting The Best Help Possible

1. Always provide your code and the surrounding context.
1. Ask about the problem at hand, not the solution itself.
1. Don’t take asking for more context to heart!

<br><br>

# How to be Great at Asking Coding Questions

1. Understand the code to the best of your ability.
1. Clearly describe the problem.
1. Provide the code that illustrates the problem.
1. Make sure the code you’re sharing can reproduce the problem.
1. Format your code consistently.
1. Check yourself for typos.
1. Explain what you did to troubleshoot the problem.
1. Explain what you think the problem might be.
1. Proofread your question.
1. Send updates and remember this will not be your last question.

[Read more](https://medium.com/@gordon_zhu/how-to-be-great-at-asking-questions-e37be04d0603)

<br><br>

# How Does the Internet Works?

## Summary
The **Internet** is the backbone of the Web, the technical infrastructure that makes the Web possible. At its most basic, the Internet is a large network of computers which communicate all together. Internet is a way to connect computers all together and ensure that, whatever happens, they find a way to stay connected.

[Read more](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work)

<br><br>

# What is the difference between webpage, website, web server, and search engine?

## Summary
Basic terms to understand
- Web page: A document which can be displayed in a web browser such as Google Chrome. These are also often called just "pages."
- Website: A collection of web pages which are grouped together and usually connected together in various ways. Often called a "web site" or a "site."
- Web server: A computer that hosts a website on the Internet.
- Search engine: A web service that helps you find other web pages, such as Google, Bing, Yahoo, or DuckDuckGo. Search engines are normally accessed through a web browser (e.g. you can perform search engine searches directly in the address bar of Firefox, Chrome, etc.) or through a web page (e.g. [bing.com](bing.com) or [duckduckgo.com](duckduckgo.com)).

[Read more](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Pages_sites_servers_and_search_engines)

<br><br>

# How the Web works

## Clients and servers
Computers connected to the web are called **clients** and **servers**. A simplified diagram of how they interact might look like this:

<img src="./images/simple-client-server.png" height="200px">

- Clients are the typical web user's internet-connected devices (for example, your computer connected to your Wi-Fi, or your phone connected to your mobile network) and web-accessing software available on those devices (usually a web browser like Firefox or Chrome).
- Servers are computers that store webpages, sites, or apps. When a client device wants to access a webpage, a copy of the webpage is downloaded from the server onto the client machine to be displayed in the user's web browser.

## IP Address and DNS

Real web addresses aren't the nice, memorable strings you type into your address bar to find your favorite websites. They are special numbers that look like this: `63.245.215.20`.

This is called an IP address, and it represents a unique location on the web. However, it's not very easy to remember. That's why Domain Name Servers were invented. These are special servers that match up a web address you type into your browser (like "mozilla.org") to the website's real (IP) address.

## Packets Explained

Basically, when data is sent across the web, it is sent in thousands of small chunks. There are multiple reasons why data is sent in small packets. They are sometimes dropped or corrupted, and it's easier to replace small chunks when this happens. Additionally, the packets can be routed along different paths, making the exchange faster and allowing many different users to download the same website at the same time. If each website was sent as a single big chunk, only one user could download it at a time, which obviously would make the web very inefficient and not much fun to use.

[Read more](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works#clients_and_servers)

<br><br>

# HTML vs CSS vs Javascript

When you’re designing or developing a website, there are three different coding languages that you will want to be aware of: **HTML**, **CSS**, and **JavaScript**.

- HTML: a language that determines how documents and web pages are displayed in a web browser, the language for the building blocks of any website.
- CSS (Cascading Style Sheets): a popular style sheet language that determines how a document created in HTML is styled (colors, font styles, layout and responsive features).
- Javascript: allows you to change CSS and HTML elements on your website after the site has been loaded, which gives you the ability to make your site more interactive and engaging for users.

<img src="./images/html_css_js.png">

Other most common web development languages are:
- Ruby: scalable and fast programming language that can help you build an extensive website or program in just a short period of time
- PHP: often used in WordPress
- SQL: for maintain and optimize large databases in a much more streamlined manner
- Python

**The main language that you use all depends on your specific project and the business goals that you have.** By identifying what these goals are, you should have a better idea of which languages are ideal when you are developing a website or application.

<br><br>

# Elements and Tags

Almost all elements on an HTML page are just pieces of content wrapped in opening and closing HTML tags. A full paragraph element looks like this:

<img src="./images/element_diagram.png">

# Flexbox Growing and Shrinking

## Flex Basis
The `flex-basis` property specifies the initial length of a flexible item. The default value is `flex-basis: auto`.  Using `auto` as a flex-basis sets the initial main size of a flex item or tells the item to check for a width declaration (e.g. `width: 250px`).

## Flex Grow
The `flex-grow` property specifies how much the item will grow relative to the rest of the flexible items inside the same container if there is remaining space in the container. The default value is `flex-grow: 0`.

## Flex Shrink
The `flex-shrink` property specifies how the item will shrink relative to the rest of the flexible items inside the same container. The dfault is `flex-shrink: 1`.

<br><br>


# Other Articles

- [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- 

