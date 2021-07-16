#!/bin/sh

docker run --rm --volume $PWD:/src -w /src -p 4000:4000 capsulecorplab/asciidoctor-extended:asciidocsy 'jekyll serve --host 0.0.0.0'

