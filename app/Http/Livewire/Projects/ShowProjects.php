<?php

namespace App\Http\Livewire\Projects;

use Illuminate\Support\Facades\Log;
use Statamic\Facades\Entry;
use Livewire\Component;

class ShowProjects extends Component
{

    public $selectedSlugs = [
        'sectors'   => [],
        'locations' => [],
    ];

    /**
     * Get filtered projects sorted by the collection structure tree
     * 
     * As stated in the documentation, to sort manually, use sort="order", and make sure you set the maximum depth to 1 for your collection:
     * 
     * @see https://statamic.dev/tags/collection#parameters,
     *
     * @return object
     */
    public function entries() {
        //Log::info("Projects get entries");
        
        $entries = Entry::query()
            // phpcs:disable
            ->where('collection', 'projects') //AND query
            ->where('status', 'published'); //AND query
        
        //AND query
        foreach ($this->selectedSlugs as $key  => $selectedSlug) {
            //Log::info("Taxonomy ".$key.': ');
            if(count($selectedSlug)) {
                //Log::info( print_r($selectedSlug,true));
                $inTax = []; 
                foreach ($selectedSlug as $slug) {
                    $inTax[] = $key.'::'.$slug;
                }
                // OR query
                $entries = $entries->whereTaxonomyIn($inTax);
                //$entries = $entries->whereTaxonomy('sectors::'.$this->selectedSectorSlug);
            }
        }
        
        //$entries = $entries->orderBy('date', 'desc')->get();
        //To sort by "order" make sure you set the maximum depth to 1 for your collection
         $entries = $entries->orderBy('order')->get();

        return $entries;
    }

    /**
     * Render projects
     *
     * @return object
     */
    public function render() {
        //Log::info("Load Livewire ShowProjects: ". print_r($this->entries(),true));
        return view(
            'livewire.projects.show-projects', 
            ['projects' => $this->entries()]
        );
    }
}
