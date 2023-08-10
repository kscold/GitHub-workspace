import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis a augue at pretium. Morbi nec varius sem. Praesent auctor, leo pulvinar tempus porta, orci mi commodo ligula, ut luctus tellus lectus ac quam. Cras vehicula tincidunt eros in efficitur. Quisque sed nunc velit. Donec scelerisque lacinia risus vitae iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur rhoncus risus nec pulvinar placerat. Vivamus eu ex nec sem sagittis luctus id id augue. Nulla porta pharetra leo. Donec aliquet, ante sit amet fringilla malesuada, est nunc molestie tellus, ac commodo mauris tellus ut dui. Integer quis ornare diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
