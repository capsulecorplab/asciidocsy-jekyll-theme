#!/usr/bin/env bash

docker run --rm --volume="$PWD:/src" -w "/src" capsulecorplab/asciidoctor-extended:asciidocsy 'jekyll build'
