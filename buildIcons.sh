buildIcons(){
    rm -rf utils/icons
    mkdir utils/icons 
    cd utils/icons 
    outPath="../icons.js"
    rm $outPath
    git clone git@github.com:material-icons/material-icons.git
    cp -r ./material-icons/svg/* .
    rm -rf material-icons
    svg2js(){
        echo $1
        (
            echo \
            "export function" \
            `echo $1 | \
                perl -pe "s/(\.\/)|(\.svg)//g" | \
                perl -pe "s/^(?=\\d)/i/" | \
                perl -pe "s/\//_/g" \
            ` \
            "(){ return"\
            `cat $1 | perl -pe "s/\sxmlns=\"http:\/\/www\.w3\.org\/2000\/svg\"//g" `\
            ";}"\
        ) >> $outPath
    }
    svgFiles=`find -type f`
    for i in $svgFiles;do svg2js $i;done
    cd ../
    rm -rf icons/
}

if [ ! -f "./utils/icons.js" ]; then
    buildIcons
fi
echo "icons builded"