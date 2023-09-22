# FFmpeg is a powerful and versatile multimedia framework that provides a 
# wide range of functionalities, including video cropping, resizing, and 
# positioning. To crop videos using FFmpeg, you can use the following syntax: 
# `ffmpeg -i input.mp4 -filter:v "crop=w:h:x:y" output.mp4`. 
# Replace `input.mp4` with the filename or path to your input video. 
# Replace `output.mp4` with the desired filename or path for the output video. 
# Specify the cropping parameters `w`, `h`, `x`, and `y` according to your 
# requirements. Understanding the cropping parameters:
# - `w`: Width of the cropped region in pixels.
# - `h`: Height of the cropped region in pixels.
# - `x`: Horizontal position of the top-left corner of the cropped 
# region relative to the original video's top-left corner. Use a positive 
# value to move right and a negative value to move left.
# - `y`: Vertical position of the top-left corner of the cropped region 
# relative to the original video's top-left corner. Use a positive value 
# to move down and a negative value to move up.

# To resize a video by specifying the desired width and height, use the 
# following command: `ffmpeg -i input.mp4 -vf "scale=w:h" output.mp4`. 
# Replace `w` and `h` with the desired width and height, respectively. 
# Modify `output.mp4` with the desired filename or path for the output video.

# To position a video within another video, you can use the following syntax: 
# `ffmpeg -i background.mp4 -i foreground.mp4 -filter_complex "[0:v][1:v]overlay=x:y" output.mp4`. 
# Replace `background.mp4` with your background video file name or path, 
# replace `foreground.mp4` with your foreground video file name or path, 
# and replace `output.mp4` with your desired output file name or path. 
# Specify the positioning parameters `x` and `y` according to your requirements. 
# Understanding the positioning parameters:
# - `x`: Horizontal position of the top-left corner of the foreground video 
# relative to the background video's top-left corner. Use a positive value 
# to move right and a negative value to move left.
# - `y`: Vertical position of the top-left corner of the foreground video 
# relative to the background video's top-left corner. Use a positive value to 
# move down and a negative value to move up.

# Source: Conversation with Bing, 8/24/2023
# (1) How to crop and resize videos using FFmpeg — Shotstack. 
# https://shotstack.io/learn/crop-resize-videos-ffmpeg/.
# (2) Quick Guide: How to Resize/ Scale Your Videos in FFmpeg Easily?. 
# https://www.dashtech.org/quick-guide-how-to-resize-scale-your-videos-in-ffmpeg-easily/.
# (3) ffmpeg resize down larger video to fit desired size and add padding .... 
# https://stackoverflow.com/questions/8133242/ffmpeg-resize-down-larger-video-to-fit-desired-size-and-add-padding.
# (4) How can I rotate and resize a video with ffmpeg?. 
# https://video.stackexchange.com/questions/36536/how-can-i-rotate-and-resize-a-video-with-ffmpeg.

#!/bin/bash

# crop
# ffmpeg -i input.mp4 -filter:v "crop=w:h:x:y" output.mp4

# resize
# ffmpeg -i input.mp4 -vf "scale=w:h" output.mp4

# position video within another video
# ffmpeg -i ./videos/dancing.mp4 -i ./videos/lux-glass.mp4 -filter_complex "[0:v][1:v]overlay=x:y" output.mp4 
# ffmpeg -f concat -i myVideosToJoin.txt -c copy joinedVideo.mp4


#!/bin/bash

title=$1

rm "./videos/$title.mp4"

ffmpeg -f concat -safe 0 -i file.txt -c copy ./videos/$title.mp4


