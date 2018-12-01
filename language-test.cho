#------------------------------------------------------------------------------+
#   This is a ChordPro language test file holding all its existing keywords   -+
#                          https://www.chordpro.org/                          -+
#------------------------------------------------------------------------------+

#------------------------------------------------------------------------------+
 Preamble directives
#------------------------------------------------------------------------------+

# This directive indicates that the current song, if any, is complete and that a
# new song will follow. This is implied at the start of a ChordPro file.
{new_song} {ns}

#------------------------------------------------------------------------------+
 Meta-data directives
#------------------------------------------------------------------------------+

# This directive defines the title of the song.
{title: Swing Low Sweet Chariot} {t: Swing Low Sweet Chariot}

# This directive defines a subtitle of the song.
{subtitle: 2nd Movement} {st: 2nd Movement}

# This directive defines an artist. Multiple artists can be specified using
# multiple directives.
{artist: Leonard Cohen}

# This directive defines a composer. Multiple composers can be specified using
# multiple directives.
{composer: Leonard Cohen}

# This directive defines the writer of the lyrics of the song.
# Multiple lyricists can be specified using multiple directives.
{lyricist: Leonard Nijgh}

# Copyright information for the song.
{copyright: year owner} {copyright: 2014 Shitting Bull Inc.}

# This directive defines an album this song occurs on. Multiple albums can be
# specified using multiple directives.
{album: Songs Of Love And Hate}

# The year this song was first published, as a four-digit number.
{year: 2016}

# This directive specifies the key the song is written in. Multiple key
# specifications are possible, each specification is assumed to apply
# from where it was specified.
{key: C}

# This directive specifies a time signature. Multiple signatures are possible,
# each specification is assumed to apply from where it was specified.
{time: 4/4}

# This directive specifies the tempo in number of beats per minute for the song.
# Multiple specifications are possible, each specification applies from where it
# appears in the song.
{tempo: 120}

# This directive specifiesthe duration of the song. This can be a number
# indicating seconds, or a time specification conforming to the extended ordinal
# time format as defined in ISO 8601. For example, durations 268 (seconds) and
# 4:28 (readable) are the same.
{duration: 268}

# This directive specifies the capo setting for the song.
{capo: 2}

# This directive defines a meta-data item. Sets meta-data item name to the
# specified contents.
{meta: name value} {meta: artist The Beatles}

#------------------------------------------------------------------------------+
 Formatting directives
#------------------------------------------------------------------------------+

# Comments can be used to place additional playing instructions in the song.
# A comment that historically was shown with a grey background.
{comment: a regular comment} {c: a regular comment}

# A comment that historically was shown using an italic typeface.
{comment_italic: an italic comment} {ci: an italic comment}

# A comment that historically was shown using a box around the text.
{comment_box: a boxed comment} {cb: a boxed comment}

# This is an alternative to comment.
{highlight: highlighted text}

# Includes a bitmap image.
{image: src=filename options}

#------------------------------------------------------------------------------+
 Environment directives
#------------------------------------------------------------------------------+

# This directive indicates that the lines that follow form the song's chorus.
# These lines are normal song lines, but will be shown in an outstanding manner.
# This directive may include an optional label, to identify the chorus.
{start_of_chorus: Chorus 2} {soc: Chorus 2}
{start_of_chorus} {soc}

# This directive indicates the end of the chorus.
{end_of_chorus} {eoc}

# This directive indicates that the song chorus must be played here.
{chorus} {chorus: Final}

# Specifies that the following lines form a verse of the song.
# Lines that are outside any start_of_…/end_of_… part will also be interpreted
# as song lines in a verse, but it may be advantageous to explicitly specify it.
# This directive may include an optional label, to be printed
# in the left margin.
{start_of_verse} {start_of_verse: Verse 1}

# Specifies the end of the verse.
{end_of_verse}

# This directive indicates that the lines that follow form a section of guitar
# TAB instructions. This directive may include an optional label, to be printed
# in the left margin.
{start_of_tab} {sot} {start_of_tab: Solo} {sot: Solo}

# This directive indicates the end of the tab.
{end_of_tab} {eot}

# This directive indicates that the lines that follow define a chord grid in the
# style of Jazz Grilles.
{start_of_grid cells } {start_of_grid measures x beats }
{start_of_grid: Intro}
{start_of_grid}
|| Am . . . | C . . . | D  . . . | F  . . . |
|  Am . . . | C . . . | E  . . . | E  . . . |
|  Am . . . | C . . . | D  . . . | F  . . . |
|  Am . . . | E . . . | Am . . . | Am . . . ||
{end_of_grid}


#------------------------------------------------------------------------------+
 Chord diagrams
#------------------------------------------------------------------------------+

# This directive defines a chord in terms of fret/string positions and,
# optional, finger settings.
{define: name base-fret offset frets pos pos … pos}
{define: name base-fret offset frets pos pos … pos fingers pos pos … pos}
{define: Bes base-fret 1 frets 1 1 3 3 3 1 fingers 1 1 2 3 4 1}
{define: As  base-fret 4 frets 1 3 3 2 1 1 fingers 1 3 4 2 1 1}

# This directive is similar to define but it only displays the chord immediately
# in the song where the directive occurs.
{chord: name}
{chord: name base-fret offset frets pos pos … pos}
{chord: name base-fret offset frets pos pos … pos fingers pos pos … pos}
# name is the name to be used for this chord. If the directive is used to show a
# known chord the rest of the arguments may be omitted.
# base-fret, frets and fingers are identical to the define directive.
{chord: Am}
{chord: Bes base-fret 1 frets 1 1 3 3 3 1 fingers 1 1 2 3 4 1}
{chord: As  base-fret 4 frets 1 3 3 2 1 1 fingers 1 3 4 2 1 1}

#------------------------------------------------------------------------------+
 Fonts, sizes and colours
#------------------------------------------------------------------------------+

# These directives change the font, size and colour of the song lyrics that
# follow. The font must be a known font name, or the name of a file containing a
# TrueType or OpenType font. The size must be a valid number like 12 or 10.5, or
# a percentage like 120%. If a percentage is given, it is taken relative to the
# current value for the size.
# The colour must be a known colour, or a hexadecimal colour code like #4491ff.
{textfont: Times-Roman} {textfont}
{textsize: 12} {textsize}
{textcolour: blue} {textcolour}

I [D]looked over Jordan, and [G]what did I [D]see,
{textcolour: red}
{textsize: 150%}
Comin’ for to carry me [A7]home.
{textcolour}
{textsize}
A [D]band of angels [G]comin’ after [D]

# These directives change the font, size and colour of the song chords that
# follow. The font must be a known font name, or the name of a file containing a
# TrueType or OpenType font. The size must be a valid number like 12 or 10.5, or
# a percentage like 120%. If a percentage is given, it is taken relative to the
# current value for the size.
# The colour must be a known colour, or a hexadecimal colour code like #4491ff
I [D]looked over Jordan, and [G]what did I [D]see,
{chordcolour: green}
Comin’ for to carry me [A7]home.
{chordcolour}
A [D]band of angels [G]comin’ after [D]me,

# These directives change the font, size and colour of the guitar TAB that
# follow. The font must be a known font name, or the name of a file containing a
# TrueType or OpenType font. The size must be a valid number like 12 or 10.5, or
# a percentage like 120%. If a percentage is given, it is taken relative to the
# current value for the size.
# The colour must be a known colour, or a hexadecimal colour code like #4491ff.
{start_of_tab}
E|-3-----3-2--------2-----2-0------||
B|---5-------3--------3-------2----||
G|-----4-------4--------2-------2--|| x4
D|---------------------------------||
A|---------------------------------||
E|---------------------------------||
{end_of_tab}

{tabcolour: blue}
{tabsize: 120%}
{start_of_tab}
E|-3-----3-2--------2-----2-0------||
B|---5-------3--------3-------2----||
G|-----4-------4--------2-------2--|| x4
D|---------------------------------||
A|---------------------------------||
E|---------------------------------||
{end_of_tab}

#------------------------------------------------------------------------------+
 Output related directives
#------------------------------------------------------------------------------+

# This directive forces a new page to be generated at the place where it occurs
# in the song.
{new_page} {np}

# This directive is legacy from the original chord program.
{new_physical_page} {npp}

# When printing songs in multiple columns, this directive forces printing to
# continue in the next column. When in the last (or only) column, this directive
# forces a page break just like the new_page directive.
{column_break} {cb}

# Enables printing of the list of chord diagrams at the end of the current song.
# The name grid is an unfortunate legacy from the original chord program and
# must not be confused with the chord grids facility.
{grid} {g}

# Disables printing of the list of chord diagrams at the end of the current
# song.
{no_grid} {ng}

# This directives specifies that the song must be printed in ncol columns.
{columns: ncol } {columns: 2} {col: 2}