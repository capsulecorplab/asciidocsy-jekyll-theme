#!/usr/bin/env bash

if [ -r ./Gemfile.lock ]; then
    docker run --rm --volume="$PWD:/src" -w "/src" capsulecorplab/asciidoctor-extended:asciidocsy 'rm Gemfile.lock'
fi

docker run --rm --volume="$PWD:/src" -w "/src" capsulecorplab/asciidoctor-extended:asciidocsy 'jekyll build'
