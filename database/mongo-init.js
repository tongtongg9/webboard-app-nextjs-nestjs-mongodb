db = db.getSiblingDB('webboard');

// Users collection
db.createCollection('users');
db.users.insertMany([
  {
    "_id": ObjectId("66beebb9ef31736dbe8894ce"),
    "username": "Kaitlyn85",
    "first_name": "Carmine",
    "last_name": "Abbott",
    "createdAt": new Date("2024-08-16T06:03:37.115Z"),
    "updatedAt": new Date("2024-08-16T06:03:37.115Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66beebc6ef31736dbe8894d2"),
    "username": "Otha.Howe67",
    "first_name": "Bret",
    "last_name": "Yundt",
    "createdAt": new Date("2024-08-16T06:03:50.717Z"),
    "updatedAt": new Date("2024-08-16T06:03:50.717Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66beebc7ef31736dbe8894d5"),
    "username": "Aglae_Oberbrunner76",
    "first_name": "Julie",
    "last_name": "Christiansen",
    "createdAt": new Date("2024-08-16T06:03:51.303Z"),
    "updatedAt": new Date("2024-08-16T06:03:51.303Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66beebc7ef31736dbe8894d8"),
    "username": "Isabelle69",
    "first_name": "Annie",
    "last_name": "Smitham",
    "createdAt": new Date("2024-08-16T06:03:51.878Z"),
    "updatedAt": new Date("2024-08-16T06:03:51.878Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66beebc8ef31736dbe8894db"),
    "username": "Rodrigo.Conroy98",
    "first_name": "Emmie",
    "last_name": "Gorczany",
    "createdAt": new Date("2024-08-16T06:03:52.386Z"),
    "updatedAt": new Date("2024-08-16T06:03:52.386Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66beebc8ef31736dbe8894de"),
    "username": "Garrison.Jacobson",
    "first_name": "Helene",
    "last_name": "Raynor",
    "createdAt": new Date("2024-08-16T06:03:52.916Z"),
    "updatedAt": new Date("2024-08-16T06:03:52.916Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66beebcaef31736dbe8894e1"),
    "username": "Otis.Dare10",
    "first_name": "Dax",
    "last_name": "Ortiz",
    "createdAt": new Date("2024-08-16T06:03:54.151Z"),
    "updatedAt": new Date("2024-08-16T06:03:54.151Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66beebcaef31736dbe8894e4"),
    "username": "Garland88",
    "first_name": "Rebecca",
    "last_name": "Hansen",
    "createdAt": new Date("2024-08-16T06:03:54.569Z"),
    "updatedAt": new Date("2024-08-16T06:03:54.569Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66beebcbef31736dbe8894e7"),
    "username": "Lyda.Beer",
    "first_name": "Jameson",
    "last_name": "Schoen",
    "createdAt": new Date("2024-08-16T06:03:55.035Z"),
    "updatedAt": new Date("2024-08-16T06:03:55.035Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66beebcbef31736dbe8894ea"),
    "username": "Triston53",
    "first_name": "Brittany",
    "last_name": "Okuneva",
    "createdAt": new Date("2024-08-16T06:03:55.472Z"),
    "updatedAt": new Date("2024-08-16T06:03:55.472Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bef3f6d348b5c568041f4f"),
    "username": "Freda35",
    "first_name": "Ross.Gutmann34",
    "last_name": "Sawayn",
    "createdAt": new Date("2024-08-16T06:38:46.546Z"),
    "updatedAt": new Date("2024-08-16T06:38:46.546Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bef3fad348b5c568041f52"),
    "username": "Guadalupe_Walsh88",
    "first_name": "Devan.Beatty",
    "last_name": "Jaskolski",
    "createdAt": new Date("2024-08-16T06:38:50.188Z"),
    "updatedAt": new Date("2024-08-16T06:38:50.188Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c1abf145c425702be1d430"),
    "username": "tongtong",
    "first_name": "Kampon",
    "last_name": "Lamyai",
    "createdAt": new Date("2024-08-18T08:08:17.426Z"),
    "updatedAt": new Date("2024-08-18T08:08:17.426Z"),
    "__v": 0
  }
]);

print('Users inserted successfully');

// Communities collection
db.createCollection('communities');
db.communities.insertMany([
  {
    "_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "name": "Others",
    "createdAt": new Date("2024-08-16T18:19:46.142Z"),
    "updatedAt": new Date("2024-08-16T18:19:46.142Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c1fe1fc5ec176fc7f794a2"),
    "name": "Exercise",
    "createdAt": new Date("2024-08-18T13:58:55.145Z"),
    "updatedAt": new Date("2024-08-18T13:58:55.145Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c1fe25c5ec176fc7f794a4"),
    "name": "Fashion",
    "createdAt": new Date("2024-08-18T13:59:01.520Z"),
    "updatedAt": new Date("2024-08-18T13:59:01.520Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c1fe29c5ec176fc7f794a6"),
    "name": "Health",
    "createdAt": new Date("2024-08-18T13:59:05.861Z"),
    "updatedAt": new Date("2024-08-18T13:59:05.861Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c1fe2ec5ec176fc7f794a8"),
    "name": "Pets",
    "createdAt": new Date("2024-08-18T13:59:10.806Z"),
    "updatedAt": new Date("2024-08-18T13:59:10.806Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c1fe32c5ec176fc7f794aa"),
    "name": "Food",
    "createdAt": new Date("2024-08-18T13:59:14.585Z"),
    "updatedAt": new Date("2024-08-18T13:59:14.585Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c1fe37c5ec176fc7f794ac"),
    "name": "History",
    "createdAt": new Date("2024-08-18T13:59:19.058Z"),
    "updatedAt": new Date("2024-08-18T13:59:19.058Z"),
    "__v": 0
  }
]);

print('Communities inserted successfully');

// Posts collection
db.createCollection('posts');
db.posts.insertMany([
  {
    "_id": ObjectId("66bf9889cd9f62e3e6bc2b58"),
    "title": "Internal Configuration Developer",
    "content": "Incidunt officia quia sint. Aut alias porro ex. Dolor amet aperiam odit dolores odit veritatis repudiandae ab ut. Consectetur consequatur velit suscipit optio nihil consequatur id sed rem. Suscipit est atque vitae recusandae sapiente iste quibusdam eum laudantium. Laboriosam numquam adipisci distinctio sit in in dolore dignissimos fuga.",
    "author_id": ObjectId("66beebb9ef31736dbe8894ce"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:20:57.506Z"),
    "updatedAt": new Date("2024-08-16T18:20:57.506Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf988acd9f62e3e6bc2b5a"),
    "title": "Global Assurance Associate",
    "content": "Ipsam ducimus reprehenderit quo. Adipisci soluta rerum aperiam aut commodi et vitae. Soluta sed nulla ut tempora. Sed alias eum velit sed ut ratione velit. Assumenda inventore omnis.",
    "author_id": ObjectId("66beebb9ef31736dbe8894ce"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:20:58.186Z"),
    "updatedAt": new Date("2024-08-16T18:20:58.186Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf988acd9f62e3e6bc2b5c"),
    "title": "Principal Operations Engineer",
    "content": "Omnis ut facilis. Iusto autem dolorem perferendis beatae. Necessitatibus dolores aut qui veritatis quia. Aperiam sapiente nihil et pariatur provident nobis. Nisi est placeat fugiat corporis est quam non neque odio. Vel quis incidunt.",
    "author_id": ObjectId("66beebb9ef31736dbe8894ce"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:20:58.806Z"),
    "updatedAt": new Date("2024-08-16T18:20:58.806Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf988bcd9f62e3e6bc2b5e"),
    "title": "Dynamic Tactics Representative",
    "content": "Nihil ipsa iste magnam minima et. Numquam inventore dolore veniam incidunt enim. Accusantium nesciunt est excepturi dolorem doloremque rerum quia velit. Reprehenderit ullam aliquam dolor. Quibusdam ad quasi omnis quia sunt.",
    "author_id": ObjectId("66beebb9ef31736dbe8894ce"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:20:59.412Z"),
    "updatedAt": new Date("2024-08-16T18:20:59.412Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf9890cd9f62e3e6bc2b60"),
    "title": "Future Data Agent",
    "content": "Voluptatem odio non aliquid nobis alias adipisci velit dicta et. Voluptas quia et omnis facere voluptate velit. Et eveniet quasi officiis occaecati unde perferendis consequatur incidunt dolorem. Facere ratione amet. Eligendi maxime facere aut molestias. Nobis eos nihil reprehenderit perferendis consequatur aliquam perspiciatis quia nam.",
    "author_id": ObjectId("66beebc6ef31736dbe8894d2"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:21:04.552Z"),
    "updatedAt": new Date("2024-08-16T18:21:04.552Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf9891cd9f62e3e6bc2b62"),
    "title": "Regional Integration Engineer",
    "content": "Rem expedita consequuntur impedit. Voluptatum asperiores sed labore soluta omnis ut quia. Laudantium ratione sit. Rem itaque illo impedit quos. Et voluptatem est blanditiis aliquid.",
    "author_id": ObjectId("66beebc6ef31736dbe8894d2"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:21:05.180Z"),
    "updatedAt": new Date("2024-08-16T18:21:05.180Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf9891cd9f62e3e6bc2b64"),
    "title": "Chief Program Liaison",
    "content": "Ullam voluptatibus enim odio officiis ratione provident ex ut. Molestiae enim aut eius aut amet eligendi. Occaecati excepturi sunt praesentium reprehenderit ducimus.",
    "author_id": ObjectId("66beebc6ef31736dbe8894d2"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:21:05.798Z"),
    "updatedAt": new Date("2024-08-16T18:21:05.798Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf9896cd9f62e3e6bc2b66"),
    "title": "Future Integration Technician",
    "content": "Veritatis molestiae ea dolores sed sit natus soluta reiciendis nihil. Ut quia non hic. Cupiditate aliquam aut at aut libero. Sit et rerum nihil neque ratione.",
    "author_id": ObjectId("66beebc7ef31736dbe8894d5"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:21:10.393Z"),
    "updatedAt": new Date("2024-08-16T18:21:10.393Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf989acd9f62e3e6bc2b68"),
    "title": "Forward Metrics Analyst",
    "content": "Eaque deleniti sunt tempora voluptates aut quia. Molestiae atque rerum vel. Fugiat qui quaerat est quibusdam quia dicta.",
    "author_id": ObjectId("66beebc6ef31736dbe8894d2"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:21:14.140Z"),
    "updatedAt": new Date("2024-08-16T18:21:14.140Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf989dcd9f62e3e6bc2b6a"),
    "title": "Dynamic Division Developer",
    "content": "Recusandae delectus et. Dolorem omnis aliquid vitae nihil rerum quidem. Et natus deserunt aliquid porro quisquam quisquam. Quis eum dolor dolore. Est et cumque. Eaque est rerum repellat necessitatibus rerum.",
    "author_id": ObjectId("66beebb9ef31736dbe8894ce"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:21:17.367Z"),
    "updatedAt": new Date("2024-08-16T18:21:17.367Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf98a1cd9f62e3e6bc2b6c"),
    "title": "Investor Quality Officer",
    "content": "Accusantium voluptas quidem qui est nisi et quis. Velit vel sed architecto est illum. Culpa asperiores eum vitae suscipit ea maxime iure omnis. Officiis labore ut possimus facere.",
    "author_id": ObjectId("66beebc7ef31736dbe8894d5"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:21:21.309Z"),
    "updatedAt": new Date("2024-08-16T18:21:21.309Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf98a1cd9f62e3e6bc2b6e"),
    "title": "Principal Communications Architect",
    "content": "Distinctio illo ut vero quo exercitationem exercitationem optio aspernatur. Quis earum aperiam recusandae. Odit fugit et vel officiis quos unde praesentium. Cupiditate consequatur consequatur.",
    "author_id": ObjectId("66beebc7ef31736dbe8894d5"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:21:21.930Z"),
    "updatedAt": new Date("2024-08-16T18:21:21.930Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf98abcd9f62e3e6bc2b70"),
    "title": "Dynamic Configuration Specialist",
    "content": "Explicabo ut voluptatum labore quae. Quo quia sed vero. Vel et aperiam molestiae rerum iure nulla asperiores.",
    "author_id": ObjectId("66beebc8ef31736dbe8894db"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:21:31.480Z"),
    "updatedAt": new Date("2024-08-16T18:21:31.480Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf98aecd9f62e3e6bc2b72"),
    "title": "Global Accountability Producer",
    "content": "Quas commodi et labore culpa nam quod error sit. Repellat id qui quo nobis sed maxime magnam omnis consequuntur. Voluptatum sed sint dolores molestiae. Vero magnam beatae incidunt sequi ut velit eius. Repellendus hic sed sapiente. Vero ad dolore doloribus sequi officia fugit atque harum accusamus.",
    "author_id": ObjectId("66beebc7ef31736dbe8894d8"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:21:34.579Z"),
    "updatedAt": new Date("2024-08-16T18:21:34.579Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf98b3cd9f62e3e6bc2b74"),
    "title": "Global Configuration Assistant",
    "content": "Enim minus quidem dolores et et aliquam. Sint ut qui quia voluptas. Facilis vero quibusdam eligendi laboriosam sit mollitia.",
    "author_id": ObjectId("66bef3f6d348b5c568041f4f"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:21:39.315Z"),
    "updatedAt": new Date("2024-08-16T18:21:39.315Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bf98b7cd9f62e3e6bc2b76"),
    "title": "Investor Mobility Consultant",
    "content": "Et illo optio consectetur. Ut laborum animi magnam earum explicabo optio eligendi. Quaerat deleniti dolore. In hic ab voluptas quam odio. Ducimus rerum in ab tempore dolorem in odit maxime.",
    "author_id": ObjectId("66beebcbef31736dbe8894ea"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-16T18:21:43.608Z"),
    "updatedAt": new Date("2024-08-16T18:21:43.608Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c228228da4649c75bf6dd8"),
    "title": "Product Intranet Orchestrator",
    "content": "Praesentium ad officia nostrum cum. Enim reiciendis iste ullam. Sit cum architecto. Molestias velit numquam labore id aut fugit. Neque at voluptates quis sed voluptatem autem commodi. Velit quae iure enim dolore assumenda impedit est voluptas asperiores.",
    "author_id": ObjectId("66beebcbef31736dbe8894ea"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-18T16:58:10.859Z"),
    "updatedAt": new Date("2024-08-18T16:58:10.859Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c26ad1594013ff10d7a6fb"),
    "title": "Lorem ipsum dolor sit amet vero.",
    "content": "Lorem ipsum dolor sit amet dolor ut et rebum diam takimata iusto est voluptua aliquyam. Dolore sea ipsum ipsum consetetur sit dolor sed vel ullamcorper accusam no lorem invidunt. Sit invidunt sed dolores duis veniam dolores vel takimata. Diam sanctus hendrerit amet dolor vero volutpat lobortis cum vero invidunt sit at ut facer. Lorem eirmod justo dolore sea adipiscing diam facilisis erat consequat voluptua gubergren. Justo justo sanctus vero justo. Consetetur laoreet et. Et justo est amet sed nostrud erat kasd consetetur diam duo. Sed ea diam takimata possim erat gubergren et lorem dolore tation nostrud duis suscipit augue ut invidunt. Sit ipsum wisi enim liber stet dolore lorem blandit accusam et vero magna et vero in feugait dolor.",
    "author_id": ObjectId("66c1abf145c425702be1d430"),
    "community_id": ObjectId("66c1fe32c5ec176fc7f794aa"),
    "createdAt": new Date("2024-08-18T21:42:41.747Z"),
    "updatedAt": new Date("2024-08-19T08:32:51.504Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c3010639c385b6897ca1eb"),
    "title": "Principal Identity Associate",
    "content": "Corporis et qui impedit itaque molestias quas provident incidunt quam. Culpa esse corporis sint nemo. Qui excepturi rerum. Et numquam in in illum.",
    "author_id": ObjectId("66c1abf145c425702be1d430"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-19T08:23:34.736Z"),
    "updatedAt": new Date("2024-08-19T08:23:34.736Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c3010a39c385b6897ca1ed"),
    "title": "Principal Quality Associate",
    "content": "Ea quibusdam id aliquam ipsum repellendus. Eligendi dicta nesciunt et nobis qui quos dolor. Minus dolor quisquam iure adipisci minima et animi in. Culpa est autem autem provident. Ducimus alias expedita. Non voluptate et quasi in aut molestiae.",
    "author_id": ObjectId("66c1abf145c425702be1d430"),
    "community_id": ObjectId("66c1fe1fc5ec176fc7f794a2"),
    "createdAt": new Date("2024-08-19T08:23:38.991Z"),
    "updatedAt": new Date("2024-08-19T08:23:38.991Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c3010b39c385b6897ca1ef"),
    "title": "Global Configuration Manager",
    "content": "Delectus quasi quisquam odit aspernatur aliquam molestiae. Est veniam pariatur fugiat atque aut numquam quod quibusdam. Voluptatem ducimus sapiente sed quibusdam non et aspernatur aut qui. Qui iusto et architecto placeat maiores est eveniet laudantium perferendis. Hic non modi doloribus iure esse fugiat dolores. Voluptas repellat laudantium molestias eos magni qui quia dignissimos.",
    "author_id": ObjectId("66c1abf145c425702be1d430"),
    "community_id": ObjectId("66c1fe1fc5ec176fc7f794a2"),
    "createdAt": new Date("2024-08-19T08:23:39.705Z"),
    "updatedAt": new Date("2024-08-19T08:23:39.705Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c3010e39c385b6897ca1f1"),
    "title": "Legacy Accounts Specialist",
    "content": "Dolor aut et velit. Repellendus in aut quam doloribus quae. Quo numquam vitae et dicta amet qui voluptatum harum in.",
    "author_id": ObjectId("66c1abf145c425702be1d430"),
    "community_id": ObjectId("66bf9842cd9f62e3e6bc2b53"),
    "createdAt": new Date("2024-08-19T08:23:42.631Z"),
    "updatedAt": new Date("2024-08-19T08:23:42.631Z"),
    "__v": 0
  }
]);

print('Posts inserted successfully');

// Comments collection
db.createCollection('comments');
db.comments.insertMany([
  {
    "_id": ObjectId("66bfb23b50b3d87478a52748"),
    "content": "Takimata aliquyam est vero est rebum. Gubergren aliquam consequat ea takimata sed et accusam facilisi erat esse vero voluptua.",
    "author_id": ObjectId("66beebcbef31736dbe8894ea"),
    "post_id": ObjectId("66bf9890cd9f62e3e6bc2b60"),
    "createdAt": new Date("2024-08-16T20:10:35.167Z"),
    "updatedAt": new Date("2024-08-16T20:10:35.167Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bfb25a50b3d87478a52750"),
    "content": "Ipsum elitr est ea veniam cum gubergren accusam sea clita nonumy sea dignissim. Nisl feugiat at labore sit ipsum rebum kasd.",
    "author_id": ObjectId("66beebcbef31736dbe8894ea"),
    "post_id": ObjectId("66bf9890cd9f62e3e6bc2b60"),
    "createdAt": new Date("2024-08-16T20:11:06.054Z"),
    "updatedAt": new Date("2024-08-16T20:11:06.054Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bfb25a50b3d87478a52752"),
    "content": "Rebum ex consetetur nihil quod diam imperdiet soluta cum no ut gubergren velit amet elitr dolore. Diam nonumy clita sit voluptua dolores dolore stet amet at sit nobis dolore vero sed tempor.",
    "author_id": ObjectId("66beebcbef31736dbe8894ea"),
    "post_id": ObjectId("66bf9890cd9f62e3e6bc2b60"),
    "createdAt": new Date("2024-08-16T20:11:06.658Z"),
    "updatedAt": new Date("2024-08-16T20:11:06.658Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bfb25b50b3d87478a52754"),
    "content": "Sed erat et takimata illum consetetur clita erat lorem dolore ipsum tation facilisis magna suscipit at dolores clita et. Magna tempor lorem facilisi sed.",
    "author_id": ObjectId("66beebcbef31736dbe8894ea"),
    "post_id": ObjectId("66bf9890cd9f62e3e6bc2b60"),
    "createdAt": new Date("2024-08-16T20:11:07.218Z"),
    "updatedAt": new Date("2024-08-16T20:11:07.218Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66bfb25b50b3d87478a52756"),
    "content": "Ut sit sit accusam esse. Et esse no clita sed eirmod accumsan consetetur labore sadipscing in duo.",
    "author_id": ObjectId("66beebcbef31736dbe8894ea"),
    "post_id": ObjectId("66bf9890cd9f62e3e6bc2b60"),
    "createdAt": new Date("2024-08-16T20:11:07.775Z"),
    "updatedAt": new Date("2024-08-16T20:11:07.775Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c236ed8a3b9b59acffa709"),
    "content": "Dolor et nibh quis consetetur et clita et stet ea lorem elitr te feugiat in at. Sed et kasd sit lorem sed sanctus hendrerit rebum sed eos nulla molestie.",
    "author_id": ObjectId("66c1abf145c425702be1d430"),
    "post_id": ObjectId("66bf98b7cd9f62e3e6bc2b76"),
    "createdAt": new Date("2024-08-18T18:01:17.800Z"),
    "updatedAt": new Date("2024-08-18T18:01:17.800Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c236f08a3b9b59acffa70c"),
    "content": "Veniam et ut duis labore facer eu vulputate sanctus invidunt ut qui ut lobortis accusam praesent. Sit ut lorem ea sea dolor est sanctus magna esse accusam.",
    "author_id": ObjectId("66c1abf145c425702be1d430"),
    "post_id": ObjectId("66bf98b7cd9f62e3e6bc2b76"),
    "createdAt": new Date("2024-08-18T18:01:20.113Z"),
    "updatedAt": new Date("2024-08-18T18:01:20.113Z"),
    "__v": 0
  },
  {
    "_id": ObjectId("66c236f38a3b9b59acffa70f"),
    "content": "Tempor eirmod in tempor labore vero nisl tempor et no eirmod ea esse dolore sed clita. Praesent et iusto erat suscipit kasd erat esse sit sed duo ipsum no ipsum dolores dolore.",
    "author_id": ObjectId("66c1abf145c425702be1d430"),
    "post_id": ObjectId("66bf98b7cd9f62e3e6bc2b76"),
    "createdAt": new Date("2024-08-18T18:01:23.366Z"),
    "updatedAt": new Date("2024-08-18T18:01:23.366Z"),
    "__v": 0
  }
]);

print('Comments inserted successfully');

print('MongoDB initialization script executed successfully');
