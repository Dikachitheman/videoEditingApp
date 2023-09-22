# FFmpeg has three concatenation methods:

# 1. concat video filter
# Use this method if your inputs do not have the same parameters 
# (width, height, etc), or are not the same formats/codecs, or if you want 
# to perform any filtering.

# Note that this method performs a re-encode of all inputs. If you want to 
# avoid the re-encode, you could re-encode just the inputs that don't match 
# so they share the same codec and other parameters, then use the concat 
# demuxer to avoid re-encoding everything.

# ffmpeg -i opening.mkv -i episode.mkv -i ending.mkv \
# -filter_complex "[0:v] [0:a] [1:v] [1:a] [2:v] [2:a] \
# concat=n=3:v=1:a=1 [v] [a]" \
# -map "[v]" -map "[a]" output.mkv

# 2. concat demuxer
# Use this method when you want to avoid a re-encode and your format does 
# not support file-level concatenation (most files used by general users do 
# not support file-level concatenation).

#!/bin/bash

# cat mylist.txt
# file '../videos/grey-dusk'
# file '../videos/lux-glass'
# file '../videos/grey-dusk'
    
ffmpeg -f concat -safe 0 -i <(echo "file '../videos/grey-dusk.mp4'"; echo "file '../videos/lux-glass.mp4'"; echo "file '../videos/grey-dusk.mp4'") -c copy output.mp4
