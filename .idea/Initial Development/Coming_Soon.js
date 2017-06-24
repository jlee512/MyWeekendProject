/**
 * Created by julian on 25/06/2017.
 */

$(document).ready(function(){

    /*Initialise the frame count*/
    var frame_counter = 1;

    var image_filenames = [{"1":"0012.frame1-5-9-15-21.png"},
                            {"2":"0011.frame2-4.png"},
                            {"3":"0010.frame3.png"},
                            {"4":"0011.frame2-4.png"},
                            {"5":"0012.frame1-5-9-15-21.png"},
                            {"6":"0009.frame6-8.png"},
                            {"7":""},
                            {"8":""},
                            {"9":""},
                            {"10":""},
                            {"11":""},
                            {"12":""},
                            {"13":""},
                            {"14":""},
                            {"15":""},
                            {"16":""},
                            {"17":""},
                            {"18":""},
                            {"19":""},
                            {"20":""},
                            {"21":""}]
    obj = JSON.parse(text);


    var timer = setInterval(frameIteration, 1000);

    function frameIteration() {

        frame_counter ++;



    }


});
