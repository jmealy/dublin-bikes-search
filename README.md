# Dublin Bikes Station Information

This is a small website for viewing information about Dublin Bikes stations. It was created for a take home assesment for an interview.

The site is built using Create React App. When you open the page, it makes a call to [the Dublin Bikes api](https://app-media.noloco.app/noloco/dublin-bikes-api.json), to get a list of all stations, their coordinates, and the number of bikes/spaces available, and displays this information in a list. You can type or choose stations from a dropdown list to show only that station.

If I had more time I would replace the dropdown meny with a simple search box that filters the list as you type. I used [react-select](https://www.npmjs.com/package/react-select) for the dropdown select menu, but in hindsight it would have been easier with no library at all.

## Testing it out

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
