<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;
use Illuminate\Support\Facades\Log;

class GetVideoId extends Modifier
{
    /**
     * Return the ID value of the Vimeo URL
     *
     * @param mixed  $url    The URL to be checked
     * @param array  $params Any parameters used in the modifier
     * @return mixed
     */
    public function index($url, $params)
    {
        // Get the parameter type, if there is one
        $type = array_get($params, 0) ?? 'embed';

        //Log::info("params: ". print_r($params,true));
        //Log::info("type: ". print_r($type,true));
 
        if($type == 'embed') {

            $is_youtube = false;

            if(strpos($url, "youtu.be") !== false) {
                $is_youtube = true;
            }
            if(strpos($url, "youtube") !== false) {
                $is_youtube = true;
            }

            if( $is_youtube ) {
                $youtubeid = explode('v=', $url);
                $youtubeid = $youtubeid[1];
                $youtubeid = explode('?', $youtubeid);
                $youtubeid = $youtubeid[0];
                $youtubeid = explode('&', $youtubeid);
                $youtubeid = $youtubeid[0];

                return $youtubeid;
            }
            
            preg_match('/\d+/', $url, $id_array);
            //Log::info("ID: ". print_r($id_array,true));
            if (empty($id_array)) {
                return false;
            }
            return  $id_array[0];
        }

        if($type == 'file') {
            $str = str_replace(['-','_','.','/'],'',$url);
            //Log::info("ID: ". print_r($str,true));
            if (empty($str)) {
                return false;
            }
            return  $str;
        }
    }
}
