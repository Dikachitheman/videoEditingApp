#!/bin/bash

startTimeInput="$1"
endTimeInput="$2"
video="$3"
title="$4"

rm "./videos/$title.mp4"

ffmpeg -ss "$startTimeInput" -i "$video" -t "$endTimeInput" -r 20 -vf "fps=20" -c:v libx264 -c:a aac "./videos/$title.mp4"
