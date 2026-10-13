
// requires plotter.js


 assert( normalizeY(100)(-1) === 100 ); // baseline
 assert( normalizeY(100)( 1) === 0 );   // scale to top

 assert( normalizeX(100)( 0) === 0 );   // left origin
 assert( normalizeX(100)( 6) === 100 ); // scale to right end


