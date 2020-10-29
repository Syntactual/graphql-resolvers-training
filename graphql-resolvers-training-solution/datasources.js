const dataSources = {
  sqlDb: {
    User: (id) => ({
      id,
      firstName: "Jean",
      lastName: "Turner",
      isAdmin: false,
      isDarkTheme: true,
    }),
    CreateUser: (user) => user
  },
  dynamoDb: {
    CollectedSongs: (id) => [
      {
        artist: {
          name: "Idan Raichal",
          numberOfAlbums: 8,
        },
        albumName: "The Idan Raichal Project",
        albumArtUrl: "www.idan-raichal.com",
        songName: `Bo'ee (Come with me)`,
        songUrl: "www.boee.idan-raichal.com",
      },
    ],
    RecentlyPlayedSongs: (id) => [
      {
        artist: {
          name: "Idan Raichal",
          numberOfAlbums: 8,
        },
        albumName: "The Idan Raichal Project",
        albumArtUrl: "www.idan-raichal.com",
        songName: `Bo'ee (Come with me)`,
        songUrl: "www.boee.idan-raichal.com",
      },
      {
        artist: {
          name: "Sierra Hull",
          numberOfAlbums: 3,
        },

        albumName: "25 Trips",
        albumArtUrl: "www.idan-raichal.com",
        songName: `The Last Minute`,
        songUrl: "www.boee.idan-raichal.com",
      },
    ],
  },
};

module.exports = dataSources;
