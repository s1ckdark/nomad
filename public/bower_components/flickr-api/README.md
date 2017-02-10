flickr-api
==========

(Some of the) Flickr API

A refactorized version of https://github.com/rpheath/jquery-flickr
It does almost the same, but this version is a little more jQuery independent and a little more flexible with the generated DOM.

Requirements
------------
Flickr API Key

How to use
----------

```
var f = new flickr({
		api_key: 'Your API Key',
		element: document.getElementById('gallery-flickr'),
		callback: function(e){
			console.log('Flickr Object', e);
			e.append();

			// If you don't want to append the images directly, you can use
			// e.images this hold an array with the img DOM for your easy use ;)
		}
	});

	f.photosetsGetList({
		user_id: 'someuser_id',
		per_page: '12',
		thumbnail_size: 's'
	});
```

Currently Supported methods
---------------------------

* photosGetRecent (flickr.photos.getRecent)
* photosGetContactsPublicPhotos (flickr.photos.getContactsPublicPhotos)
* photosSearch (flickr.photos.search)
* photosGetInfo (flickr.photos.getInfo)
* photosetsGetPhotos (flickr.photosets.getPhotos)
* photosetsGetList (flickr.photosets.getList)
* favoritesGetPublicList (favorites.getPublicList)

Flick API documentation
-----------------------
http://www.flickr.com/services/api/

Contribute
----------
Need another method? feel free to make a pull request and I'll be glad to merge it ;)
