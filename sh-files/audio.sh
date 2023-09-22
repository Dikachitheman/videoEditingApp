# To remove and add audio to a video in FFmpeg, 
# you need to use two commands:

# - To remove the audio from a video named input.mp4 and save 
# it as output.mp4 without re-encoding the video, you can use 
# this command:

# `ffmpeg -i input.mp4 -an -c:v copy output.mp4`

# - To add a new audio track named audio.m4a to the 
# video output.mp4 and save it as output_with_audio.mp4, 
# you can use this command:

# `ffmpeg -i output.mp4 -i audio.m4a -c:v copy -c:a aac -shortest output_with_audio.mp4`

# You can find more details and options in these websites¹²³. I hope this helps. 😊

# Source: Conversation with Bing, 8/24/2023
# (1) How to add a new audio (not mixing) into a video using ffmpeg?. https://stackoverflow.com/questions/11779490/how-to-add-a-new-audio-not-mixing-into-a-video-using-ffmpeg.
# (2) Remove audio from video file with FFmpeg - Super User. https://superuser.com/questions/268985/remove-audio-from-video-file-with-ffmpeg.
# (3) How to Remove the Audio from a Video using FFmpeg. https://creatomate.com/blog/how-to-remove-the-audio-from-a-video-using-ffmpeg.

#!/bin/bash

# ffmpeg -i "yx.mp4" -i "xdrake.mp3" -vcodec copy -acodec copy -map 0:0 -map 1:0 "output.mp4"

#!/bin/bash

audio="$1"
video="$2"
title="$3"

rm "./videos/$title.mp4"

ffmpeg -i "$video" -i "$audio" -r 20 -vcodec copy -acodec copy -map 0:0 -map 1:0 "./videos/$title.mp4"
