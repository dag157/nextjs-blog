---
title: 'Scraping Craiglist for Emails with Python'
date: '2021-02-16'
url: 'post-2-Scraping_Craigslist_for_emails'
---

Python is great for scripting. It's easy to read, write and has a lot of great libraries for a variety of things. One of the things I use as a software engineer has been selenium for automated testing. However, this can great for scraping web pages as well. Here's a simple tutorial for creating a webscraper in Python for grabbing emails on a craiglist page. They're randomized by craiglist, but they still forward emails to the correct email address.

For this tutorial, you will need Python 3.7 and a chromium webdriver, which can be downloaded [here](https://chromedriver.chromium.org/downloads). For simplicity, we can keep everything in same folder. Let's start by creating a new folder and email_scraper.py. We also need to install `selenium` and `BeautifulSoup`; I also recommened creating a [virtual env](https://docs.python.org/3/library/venv.html) first.

```
mkdir email_scraper
cd email_scraper
touch email_scraper.py
pip install selenium beautifulsoup4
```

Then, let's add the following code to email_scraper.py. This code will instantiate our webdriver and also set the page which we want to scrape.

<script src="https://gist.github.com/dag157/ac9df6eab4162852566cf9cc94eba7bf.js"></script>

Next, we want to add in our implementation. For simplicity, I set our limit to 500 different postings. Our code will list each posting on the craiglist page we selected and then crawl each link. Once we crawl the link, we find the email listed in posting and write it to a text file.

<script src="https://gist.github.com/dag157/1cf6331a188b788aa5f34f85b5c55ac3.js"></script>

We can just run the code easy as well.

```
python3 email_scraper.py
```

Violà! You can now check your test_emails.txt file for a list of scraped emails.

If you want to download the script I wrote, it is available on my [github](https://github.com/dag157/craigslist-email-scraper-with-python).
