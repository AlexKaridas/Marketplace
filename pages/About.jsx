import Header from "../components/Header";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Header />
      <section className={styles.aboutArticle}>
        <article className={styles.bigText}>
          <h1>About us</h1>
          <span className={styles.container}>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              posuere sem libero, eget congue urna condimentum nec. Maecenas
              efficitur vestibulum posuere. Praesent vehicula vel erat ac
              sagittis. Duis luctus porta egestas. Ut eu molestie purus. Aenean
              posuere et elit non imperdiet. Aliquam bibendum urna ac nulla
              efficitur dictum. Nam ut tortor in metus ultricies egestas
              convallis id augue. Sed sed commodo nulla. Ut enim elit, iaculis
              vel condimentum at, luctus at diam. Nulla vestibulum dolor at
              rutrum consequat. Nulla pulvinar faucibus ligula non convallis.
              Integer interdum ante orci, ut molestie sem accumsan et.
              Pellentesque suscipit sem in ante tristique luctus. Donec quam
              odio, ultricies sit amet sapien ac, iaculis volutpat diam. Cras eu
              dolor a neque tempor elementum. Integer vehicula pulvinar
              fermentum.
            </h3>
          </span>
          <br />
          <span className={styles.container}>
            <h1>Elementum</h1>
            <h3>
              Donec porttitor tincidunt tempor. Vestibulum commodo urna eu nulla
              pretium, ut sagittis ipsum eleifend. Suspendisse tempor at magna
              non interdum. Fusce elit tortor, luctus nec diam ut, auctor
              tincidunt erat. Vestibulum aliquam sapien et hendrerit pulvinar.
              Morbi id viverra mauris. Nunc maximus neque nec odio gravida
              elementum vel id enim. Etiam nec lorem eu nisl rhoncus rutrum in
              vitae nisl. Nulla dignissim risus ac nibh dapibus, fringilla
              vestibulum sapien consectetur. Vestibulum venenatis diam nulla, id
              condimentum lacus fermentum tincidunt. Integer leo eros,
              vestibulum sagittis facilisis id, tincidunt non lorem. Nam odio
              leo, lobortis sit amet est id, maximus ullamcorper nibh. Phasellus
              convallis augue nec tempus accumsan. Fusce malesuada lectus
              sagittis eros sodales lobortis. Nullam ac scelerisque est, eu
              tempus diam. Curabitur eu massa tempus, lobortis dui vitae, tempus
              eros. Aenean nec cursus quam, vel finibus purus. Praesent
              vulputate leo in lacus ultricies tincidunt. Phasellus
            </h3>
          </span>
          <span className={styles.container}>
            <h1>Elementum</h1>
            <h3>
              feugiat diam porta felis ultrices convallis. Curabitur in
              pellentesque risus. Nunc ornare maximus mollis. In hac habitasse
              platea dictumst. Cras vitae luctus nibh, non condimentum leo. Nunc
              vestibulum purus ut massa interdum, in consequat ipsum imperdiet.
              Praesent sed nibh quis tellus blandit rutrum quis quis urna.
              Vestibulum ex ipsum, condimentum ut dictum quis, lobortis sit amet
              felis. Nam convallis at ipsum et elementum. Vivamus blandit sem
              malesuada efficitur consequat. Aenean lobortis metus augue, quis
              ultrices nulla ultrices eget. Pellentesque augue turpis, ultricies
              quis leo eu, volutpat bibendum neque. Aenean consectetur gravida
              elit interdum eleifend. Aliquam erat volutpat. Aliquam a diam in
              augue venenatis molestie. Phasellus eget vestibulum nunc. Integer
              sit amet mauris sit amet mauris viverra ultricies. Sed cursus
              tellus diam, quis porta est condimentum sed. Fusce mattis odio
              vitae sodales faucibus. Praesent accumsan, elit sed efficitur
              posuere, mi nisi accumsan elit, in consequat tortor mauris sit
              amet sapien. Nunc vel metus ac tortor maximus commodo a id odio.
            </h3>
          </span>
        </article>
      </section>
    </>
  );
}
