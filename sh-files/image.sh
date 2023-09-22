# FFmpeg is a command-line tool that can convert images to video. 
# You need to have FFmpeg installed on your computer and use the 
# terminal to run the commands. Here are some examples of how to use 
# FFmpeg to convert images to video:

# - To convert a sequence of images named 
# test_001.jpg, test_002.jpg, ..., test_100.jpg to a video 
# named output.mp4 with 25 frames per second, you can use this command:

# `ffmpeg -framerate 25 -i test_%03d.jpg output.mp4`

# - To convert a single image named image.jpg to a video 
# named output.mp4 with 10 seconds duration, you can use this command:


# - To add an audio track named music.mp3 to the video output.mp4, 
# you can use this command:

# `ffmpeg -i output.mp4 -i music.mp3 -c:v copy -c:a aac -shortest output_with_audio.mp4`


# Source: Conversation with Bing, 8/24/2023
# (1) How to create a video from images with FFmpeg? [closed]. https://stackoverflow.com/questions/24961127/how-to-create-a-video-from-images-with-ffmpeg.
# (2) How to use FFmpeg to convert images to video — Shotstack. https://shotstack.io/learn/use-ffmpeg-to-convert-images-to-video/.
# (3) How to create a video from images using FFmpeg? - Super User. https://superuser.com/questions/624567/how-to-create-a-video-from-images-using-ffmpeg.

# ffmpeg -loop 1 -i aelogo.png -t 10 output.mp4

#!/bin/bash

timeVar="$1"
imageVar="$2"
title="$3"

rm "./videos/$title.mp4"

ffmpeg -loop 1 -i "$imageVar" -t "$timeVar" -r 20 -vf "fps=20" "./videos/$title.mp4"
