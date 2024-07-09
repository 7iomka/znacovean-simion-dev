<!-- Default <head> (can be overridden by pages) -->

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- Favicon stuff -->
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/static/favicon/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/static/favicon/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="/static/favicon/favicon-16x16.png"
  />
  <link rel="manifest" href="/static/favicon/site.webmanifest" />
  <link
    rel="mask-icon"
    href="/static/favicon/safari-pinned-tab.svg"
    color="#5bbad5"
  />
  <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta
    name="msapplication-config"
    content="/static/favicon/browserconfig.xml"
  />
  <meta name="theme-color" content="#ffffff" />

  <!-- preload fonts -->
  <link
    rel="preload"
    href="/static/fonts/aeonik-bold.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="/static/fonts/aeonik-regular.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <style type="text/css">
    @font-face {
      font-family: 'Aeonik';
      src:
        url('/static/fonts/aeonik-regular.woff2') format('woff2'),
        url('/static/fonts/aeonik-regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Aeonik';
      src:
        url('/static/fonts/aeonik-bold.woff2') format('woff2'),
        url('/static/fonts/aeonik-bold.woff') format('woff');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
  </style>

  <component
    :is="'script'"
    src="/static/scripts/modernizr-bundle.min.js"
    defer
  />
</template>

<script setup lang="ts"></script>
