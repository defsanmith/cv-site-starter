import { siteConfig } from "@/constants/config";
import Image from "next/image";

export default function Home() {
  return (
    <div className="prose max-w-none prose-invert prose-h1:text-2xl prose-h1:font-semibold">
      <Image
        className="rounded-full mx-auto h-48 w-48"
        alt={siteConfig.title}
        src={siteConfig.profileImage}
        width={512}
        height={512}
      />
      <h1>Hey!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare non
        diam vel laoreet. Aliquam velit tortor, viverra id lectus eget, molestie
        finibus ligula. Morbi eget efficitur ex, sit amet laoreet libero. Ut id
        rutrum augue, in tristique erat. Pellentesque nunc justo, fermentum ut
        felis sit amet, imperdiet fringilla nulla. Aliquam lectus lectus,
        lacinia et molestie id, vehicula eu felis. Phasellus cursus dolor vitae
        sem pharetra, at porta sem auctor. Nunc quam metus, venenatis ut
        ultricies eu, commodo eget eros.
      </p>
      <p>
        Cras interdum pretium pellentesque. Aliquam aliquet viverra nulla, eget
        interdum lectus. Aenean consequat sem vitae lacus dignissim, sed
        ultricies leo gravida. Donec semper nisi nec velit condimentum interdum.
        Mauris nec quam accumsan, tempus quam sit amet, congue nisi. Sed blandit
        elit eget dui semper consectetur. In at pharetra turpis, sed pretium
        velit.
      </p>
      <p>
        Vestibulum volutpat blandit dui vitae ornare. Curabitur ultricies
        blandit arcu, quis pharetra enim interdum ac. Nunc dapibus velit at quam
        fringilla egestas et vel leo. Integer varius eleifend nibh non
        imperdiet. Aliquam tortor augue, facilisis sed ex sed, porta euismod
        mauris. Fusce eget iaculis nulla, ut efficitur orci. Ut pulvinar dolor
        vitae malesuada gravida. Sed et consequat ligula. Integer consequat,
        felis condimentum pretium mattis, leo neque finibus dui, eu aliquam orci
        magna ut elit. Nullam dictum libero sed lectus ullamcorper, ut
        vestibulum dui ultrices.
      </p>
      <p>
        Nam gravida ac tellus semper tempor. Cras vel cursus ipsum. Fusce eu
        congue turpis. In tincidunt metus metus, id auctor eros egestas quis.
        Pellentesque a semper nulla. Nulla posuere turpis a quam vehicula
        mollis. Nunc consectetur aliquet interdum. Vivamus pellentesque, ante
        eget eleifend suscipit, sapien odio ornare quam, sed porttitor odio
        libero non ipsum. Sed ut sem mauris.
      </p>
    </div>
  );
}
