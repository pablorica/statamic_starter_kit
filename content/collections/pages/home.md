---
id: home
blueprint: page
title: Home
updated_by: b2942213-49d1-4a14-b79d-5a06f75a8862
updated_at: 1761233532
seo_noindex: false
seo_nofollow: false
seo_canonical_type: entry
sitemap_change_frequency: weekly
sitemap_priority: 0.5
page_builder:
  -
    id: m845sb95
    columns:
      -
        id: m845sczh
        column_article:
          -
            type: heading
            attrs:
              textAlign: left
              level: 1
            content:
              -
                type: text
                text: 'Welcome to Statamic 5!'
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'This is your personal bespoke development sherpa based on Peak. Start every project with this kit full of development goodies. '
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: "But beware, this kit ain't here to be pretty. There are some examples of what Peak can do, but the rest is up to you. "
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'Get climbing!'
          -
            type: paragraph
            attrs:
              textAlign: left
            content:
              -
                type: text
                text: 'You can also use '
              -
                type: text
                marks:
                  -
                    type: textColor
                    attrs:
                      color: '#65B2E8'
                text: use
              -
                type: text
                text: ' '
              -
                type: text
                marks:
                  -
                    type: textColor
                    attrs:
                      color: '#FF6B00'
                text: coloured
              -
                type: text
                text: ' '
              -
                type: text
                marks:
                  -
                    type: textColor
                    attrs:
                      color: '#00AC69'
                text: text
              -
                type: text
                text: ' if you want!'
        size: 4
        set_horizontal_position: true
        set_span_rows: false
        vertical_alignment: top
        top_padding: -1
        right_padding: -1
        bottom_padding: -1
        left_padding: -1
        size_mobile: 6
        mobile_top_padding: -1
        mobile_right_padding: -1
        mobile_bottom_padding: -1
        mobile_left_padding: -1
        tablet_size: 12
        type: new_column
        enabled: true
        horizontal_position: 5
        mobile_horizontal_position: 0
        tablet_horizontal_position: 0
        span_rows: 0
    background_colour_type: custom
    background_colour: white
    text_colour_type: custom
    text_colour: black
    section_over_floating_logo: false
    loading_effect: true
    top_border: false
    remove_columns_gap: false
    screen_minimum_height: false
    display_scrolldown_button: false
    section_collapsable: false
    top_padding: -1
    right_padding: -1
    bottom_padding: -1
    left_padding: -1
    type: section
    enabled: true
    slug: intro
  -
    id: m8457dx2
    columns:
      -
        id: m8457ty9
        column_article:
          -
            type: heading
            attrs:
              textAlign: left
              level: 2
            content:
              -
                type: text
                text: Carousel
          -
            type: set
            attrs:
              id: m84583n9
              values:
                type: carousel
                carousel:
                  -
                    id: m847iyrw
                    image: image05.jpg
                    caption: 'Image 05 Caption'
                    type: slide
                    enabled: true
                  -
                    id: m847jfmj
                    image: image06.jpg
                    caption: 'Image 06 Caption'
                    type: slide
                    enabled: true
                  -
                    id: m847jmmi
                    image: image07.jpg
                    caption: 'Image 07 Caption'
                    type: slide
                    enabled: true
                navigation_arrows: true
                navigation: false
                full_size: false
                autoplay: false
                transition: carousel
        size: 12
        set_horizontal_position: false
        set_span_rows: false
        vertical_alignment: top
        top_padding: -1
        right_padding: -1
        bottom_padding: -1
        left_padding: -1
        size_mobile: 6
        mobile_top_padding: -1
        mobile_right_padding: -1
        mobile_bottom_padding: -1
        mobile_left_padding: -1
        tablet_size: 12
        type: new_column
        enabled: true
        horizontal_position: 0
        span_rows: 0
        mobile_horizontal_position: 0
        tablet_horizontal_position: 0
    background_colour_type: custom
    background_colour: white
    text_colour_type: custom
    text_colour: black
    section_over_floating_logo: false
    loading_effect: true
    top_border: false
    remove_columns_gap: false
    screen_minimum_height: false
    display_scrolldown_button: false
    section_collapsable: false
    top_padding: -1
    right_padding: -1
    bottom_padding: -1
    left_padding: -1
    type: section
    enabled: true
    slug: carousel
  -
    id: m84acvnn
    columns:
      -
        id: mh3kv16f
        column_article:
          -
            type: heading
            attrs:
              textAlign: left
              level: 1
            content:
              -
                type: text
                text: Videos
        size: 12
        set_horizontal_position: false
        set_span_rows: false
        vertical_alignment: top
        top_padding: -1
        right_padding: -1
        bottom_padding: -1
        left_padding: -1
        size_mobile: 6
        mobile_top_padding: -1
        mobile_right_padding: -1
        mobile_bottom_padding: -1
        mobile_left_padding: -1
        tablet_size: 12
        type: new_column
        enabled: true
        horizontal_position: 0
        span_rows: 0
        mobile_horizontal_position: 0
        tablet_horizontal_position: 0
      -
        id: m84acxqd
        column_article:
          -
            type: set
            attrs:
              id: m84ad14n
              values:
                type: video
                video_type: embed
                video_url: 'https://www.youtube.com/watch?v=0Nq20u0YzoI'
                ratio_width: 16
                ratio_height: 9
                video_autoplay: true
                video_loop: true
                show_mute_button: true
        size: 6
        set_horizontal_position: false
        set_span_rows: false
        vertical_alignment: top
        top_padding: -1
        right_padding: -1
        bottom_padding: -1
        left_padding: -1
        size_mobile: 6
        mobile_top_padding: -1
        mobile_right_padding: -1
        mobile_bottom_padding: -1
        mobile_left_padding: -1
        tablet_size: 12
        type: new_column
        enabled: true
        horizontal_position: 0
        span_rows: 0
        mobile_horizontal_position: 0
        tablet_horizontal_position: 0
      -
        id: m84ae52w
        column_article:
          -
            type: set
            attrs:
              id: m84ad14n
              values:
                type: video
                video_type: embed
                video_url: 'https://www.vimeo.com/140088872'
                ratio_width: 16
                ratio_height: 9
                video_autoplay: true
                video_loop: true
                show_mute_button: true
        size: 6
        set_horizontal_position: false
        set_span_rows: false
        vertical_alignment: top
        top_padding: -1
        right_padding: -1
        bottom_padding: -1
        left_padding: -1
        size_mobile: 6
        mobile_top_padding: -1
        mobile_right_padding: -1
        mobile_bottom_padding: -1
        mobile_left_padding: -1
        tablet_size: 12
        type: new_column
        enabled: true
        horizontal_position: 0
        span_rows: 0
        mobile_horizontal_position: 0
        tablet_horizontal_position: 0
    background_colour_type: custom
    background_colour: white
    text_colour_type: custom
    text_colour: black
    section_over_floating_logo: false
    loading_effect: true
    top_border: false
    remove_columns_gap: false
    screen_minimum_height: false
    display_scrolldown_button: false
    section_collapsable: false
    top_padding: -1
    right_padding: -1
    bottom_padding: -1
    left_padding: -1
    type: section
    enabled: true
    slug: videos
---
