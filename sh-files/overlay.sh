#!/bin/bash




# ffmpeg -y -i ./videos/default-dude.mp4 -i ./videos/aelogo.png -filter_complex "[1]scale=1000:500[logo];[0][logo]overlay=x=10:y=10:eval=init:[out]" -map "[out]" -map 0:a? test.mp4


zero="$1"
one="$2"
width="$3"
height="$4"
left="$5"
top="$6"
title="$7"

rm "./videos/$title.mp4"

ffmpeg -y -i "$zero" -i "$one" -filter_complex "[1:v]scale=$width:$height[logo];[0:v][logo]overlay=x=$left:y=$top:eval=init[out]" -map "[out]" -map 0:a? -r 20 -c:v libx264 -c:a aac "./videos/$title.mp4"






# ffmpeg -y -i yuii.mp4 -i aelogo.png -filter_complex [0]overlay=x=0:y=0[out] -map [out] -map 0:a? test.mp4

# ffmpeg -y -i video.mp4 -i 1.png -i 2.png -i 3.png 
# -filter_complex [0][1]overlay=enable='between(t,0,3)':x=0:y=0[out];
# [out][2]overlay=enable='between(t,3,6)':x=0:y=0[out];
# [out][3]overlay=enable='between(t,6,9)':x=0:y=0[out] -map [out] -map 0:a? 
# new.mp4


# To resize and position the PNG overlay in the ffmpeg command you provided, you can modify the overlay 
# filter's parameters. The overlay filter takes the following parameters: x, y, and the eval option for 
# expression evaluation. Here's how you can modify the command to resize and position the PNG overlay:

# bash
# Copy code
# ffmpeg -y -i yuii.mp4 -i aelogo.png -filter_complex "[0][1]overlay=x=10:y=10:eval=init:shortest=1[out]" -map "[out]" -map 0:a? test.mp4
# In this example:

# x=10 sets the horizontal position of the overlay to 10 pixels from the left edge of the video.
# y=10 sets the vertical position of the overlay to 10 pixels from the top edge of the video.
# eval=init initializes the overlay filter expression evaluation.
# shortest=1 ensures that the output video stream lasts as long as the shortest input stream 
# (in this case, the video).
# You can adjust the x and y values to position the overlay wherever you want. Additionally, 
# if you want to resize the overlay, you can use the scale filter before applying the overlay filter. 
# Here's an example that resizes the overlay to a specific width and height:

# bash
# Copy code
# ffmpeg -y -i yuii.mp4 -i aelogo.png -filter_complex "[1]scale=100:50[logo];[0][logo]overlay=x=10:y=10:eval=init:shortest=1[out]" -map "[out]" -map 0:a? test.mp4
# In this example:

# scale=100:50 resizes the overlay to a width of 100 pixels and a height of 50 pixels.
# Remember to adjust the dimensions, position, and any other parameters according to your specific requirements.

# ffmpeg -y -i yuii.mp4 -i aelogo.png -filter_complex "[1]scale=100:50[logo];[0][logo]overlay=x=10:y=10:eval=init:shortest=1[out]" -map "[out]" -map 0:a? test.mp4



# important
# ffmpeg -y -i ./videos/default-dude.mp4 -i ./videos/aelogo.png -filter_complex "[1]scale=1000:500[logo];[0][logo]overlay=x=10:y=10:eval=init:[out]" -map "[out]" -map 0:a? test.mp4

# ffmpeg -y -i yuii.mp4 -i yx.mp4 -filter_complex "[1]scale=1000:500[logo];[0][logo]overlay=x=10:y=10:eval=init:[out]" -map "[out]" -map 0:a? test.mp4

#horizontal stack
# ffmpeg -i yx.mp4 -i yx.mp4 -filter_complex "[0:v][1:v]hstack=inputs=2[v]" -map "[v]" output.mp4
