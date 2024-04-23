// @ts-ignore
import { Link } from "react-scroll";
import xstore from "../components/xstore";
import { useNavigate } from "react-router-dom";

const listPortfolio = [
  {
    bg: "bg-ordiswap.png",
    img: "ordiswap.png",
    title: "Ordiswap",
    desc: "Ordiswap brings dynamic AMM infrastructure to BRC-20",
  },
  {
    bg: "bg-inscribe.png",
    img: "inscribe.png",
    title: "Inscribe",
    desc: "The first cross-chain marketplace",
  },
  {
    bg: "bg-rivus.png",
    img: "rivus.png",
    title: "Rivus DAO",
    desc: "Liquid staking & unlocking DeFi on the Bittensor network",
  },
  {
    bg: "bg-architext.png",
    img: "architex.png",
    title: "Architex",
    desc: "Ordiswap brings dynamic AMM infrastructure to BRC-20",
  },
  {
    bg: "bg-komputai.png",
    img: "komputai.png",
    title: "Komputai",
    desc: "Leveraging GPU/TPU power for decentralized computing and LLM training.",
  },
  {
    bg: "bg-navy.png",
    img: "navy.png",
    title: "NavyAI",
    desc: "The first Blockchain Layer on Solana for AI models training",
  },
];
const listOurTeam = [
  {
    img: "thangnd217.png",
    name: "thangnd217",
    info: "Founding Partner",
    url: "https://twitter.com/thangnd217",
  },
  {
    img: "bopoeth.png",
    name: "bopoeth",
    info: "Partner & COO",
    url: "https://twitter.com/bopoeth",
  },
  {
    img: "thenunanalyst.png",
    name: "thenunanalyst",
    info: "Ventures Associate",
    url: "https://twitter.com/thenunanalyst",
  },
  {
    img: "leeminthold.png",
    name: "leeminthold",
    info: "Researcher",
    url: "https://twitter.com/leeminthold",
  },
];

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="dots"></div>
        <div className="dots2"></div>
        <main className="main">
          <section className="section">
            <div className="">
              <div className="container relative">
                <div id="/" className="pt-[190px] py-[100px]">
                  <div className="xl:max-w-[1020px] mx-auto text-center">
                    <h1 className="mb-8 mx-auto ">Crypto Venture Capital</h1>

                    <p className="text-textOpacity mb-9">
                      Insiderum operates as a firm with a strong, research-based
                      stance, investing in key areas we're convinced will
                      significantly influence the global landscape
                    </p>
                    <Link
                      activeClass="active"
                      to={`portfolio`}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <button>Get Started</button>
                    </Link>
                  </div>
                </div>
                {/* <div className="relative">
                  <a href="#mission">
                    <img
                      className="mx-auto relative z-[1] cursor-pointer"
                      src="/images/home/down.png"
                      alt=""
                    />
                  </a>
                  <img
                    className=" absolute top-1/2"
                    src="/images/home/line.png"
                    alt=""
                  />
                </div> */}
              </div>
            </div>
          </section>
          <div className="container relative">
            <section className="section">
              <div id="portfolio" className="pt-[100px] w-full">
                <h2 className="text-center mb-16">Portfolio</h2>
                <div className="grid sm:grid-cols-2 gap-6 md:gap-16 md:grid-cols-3 grid-cols-1">
                  {listPortfolio.map((item) => {
                    return (
                      <div className="bg-[#141218] rounded-[10px] h-[320px] relative px-10 flex flex-col gap-8 justify-center">
                        <img
                          src={`/images/home/${item.bg}`}
                          alt={item.title}
                          className="absolute top-0 right-0 h-[60%] rounded-tr-[10px]"
                        />
                        <img
                          src={`/images/home/${item.img}`}
                          alt={item.title}
                          className="w-14 h-14 rounded border border-bgOpacity"
                        />
                        <div className="">
                          <div className="text-2xl font-bold">{item.title}</div>
                          <div className="mt-4 text-sm text-textOpacity">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-16 flex justify-center">
                  <button className="" onClick={() => navigate("/portfolio")}>
                    See more
                  </button>
                </div>
              </div>
            </section>
            <section className="section">
              <div id="technology" className="pt-[100px] w-full relative">
                <div className="flex gap-8 md:flex-row flex-col">
                  <div className="flex-[1]">
                    <h2>Our Team</h2>
                    <div className="mt-8 text-textOpacity">
                      The team at Insiderum possesses extensive expertise
                      garnered from researching, developing, and making
                      investments at the forefront of the cryptocurrency sector.
                    </div>
                  </div>
                  <div className="flex-[1] grid grid-cols-2 gap-[1px]">
                    {listOurTeam.map((item) => {
                      return (
                        <div className="sm:p-6 p-4 item-our relative cursor-pointer">
                          <a href={item.url} target="_blank">
                            <img
                              src={`/images/home/${item.img}`}
                              alt={item.name}
                              className="w-full mb-6"
                            />
                            <div className="text-center mx-auto xl:px-6">
                              <div className="px-[10px] py-2 rounded-[10px] bg-bgTable flex gap-2 items-center justify-center">
                                <img
                                  src="/images/icon/x.svg"
                                  alt=""
                                  className="w-4 h-4"
                                />
                                <div className="font-medium text-base">
                                  {item.name}
                                </div>
                              </div>
                              <div className="mt-4 text-sm">{item.info}</div>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            <section className="section">
              <div id="ecosystem" className="pt-[100px] w-full">
                <h2>What Makes Us Stand Out</h2>
                <div className="mt-14">
                  <div className="flex gap-8 flex-col md:flex-row">
                    <div className="flex-[2] md:p-8 p-4 rounded-[10px] bg-bgTable">
                      <div className="p-4 bg-[#18171B] rounded-full w-fit">
                        <img
                          src="/images/home/network.svg"
                          alt=""
                          className="w-[45px] h-[45px]"
                        />
                      </div>
                      <div className="mt-8 md:text-3xl text-2xl font-bold">
                        Networking
                      </div>
                      <div className="mt-4 text-sm text-textOpacity">
                        Connect with some of the most notable 200+ KOLs, Smart
                        Money and investors
                      </div>
                    </div>
                    <div className="flex-[3] md:p-8 p-4 rounded-[10px] bg-bgTable">
                      <div className="p-4 bg-[#18171B] rounded-full w-fit">
                        <img
                          src="/images/home/network.svg"
                          alt=""
                          className="w-[45px] h-[45px]"
                        />
                      </div>
                      <div className="mt-8 md:text-3xl text-2xl font-bold">
                        10M+ Capital
                      </div>
                      <div className="mt-4 text-sm text-textOpacity">
                        Provide liquidity and funding for promising projects.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8 flex-col md:flex-row mt-8">
                    <div className="flex-[3] md:p-8 p-4 rounded-[10px] bg-bgTable">
                      <div className="p-4 bg-[#18171B] rounded-full w-fit">
                        <img
                          src="/images/home/book.svg"
                          alt=""
                          className="w-[45px] h-[45px]"
                        />
                      </div>
                      <div className="mt-8 md:text-3xl text-2xl font-bold">
                        Advisor
                      </div>
                      <div className="mt-4 text-sm text-textOpacity">
                        Introduce new profitable ideas to Web3 projects and
                        provide support for long-term business sustainability.
                      </div>
                    </div>
                    <div className="flex-[2] md:p-8 p-4 rounded-[10px] bg-bgTable">
                      <div className="p-4 bg-[#18171B] rounded-full w-fit">
                        <img
                          src="/images/home/flower.svg"
                          alt=""
                          className="w-[45px] h-[45px]"
                        />
                      </div>
                      <div className="mt-8 md:text-3xl text-2xl font-bold">
                        Intelligence
                      </div>
                      <div className="mt-4 text-sm text-textOpacity">
                        Handpicked insights, focusing on high quality and steady
                        reliability.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <section className="section">
              <div
                id="contact"
                className="lg:pt-[200px] pt-[20px] pb-[80px] lg:pb-[200px] text-center w-full"
              >
                sdf
              </div>
            </section> */}
          </div>
        </main>
      </div>
    </>
  );
};

export default Landing;
