#!/usr/bin/env bash

docker run --rm --volume="$PWD:/src" -w "/src" capsulecorplab/asciidoctor-extended:asciidocsy 'bundle i && bundle exec jekyll build'
