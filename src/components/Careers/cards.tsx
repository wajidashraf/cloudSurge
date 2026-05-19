import bulbImg from '@/assets/1.svg';
import grow from '@/assets/3.svg';
import globe from '@/assets/2.svg';
import team from '@/assets/4.svg';

const cards = [
  {
    id: 1,
    img: bulbImg,
    title: 'Innovative \n Environment',
    text: 'We embrace new ideas, cutting-edge tech, and creative thinking.',
  },
  {
    id: 2,
    img: globe,
    title: 'Global \n Impact',
    text: 'Our solutions & academy model empower communities across the world.',
  },
  {
    id: 3,
    img: grow,
    title: 'Continuous \n Growth',
    text: 'We invest in training, certifications, and personal development.',
  },
  {
    id: 4,
    img: team,
    title: 'Team \n Spirit',
    text: "Collaboration is at our core — everyone's voice matters.",
  },
];

const imgClass: Record<number, string> = {
  1: 'w-10 h-12',
  2: 'w-12 h-12',
  3: 'w-12 h-12',
  4: 'w-14 h-12',
};

export default function CardsGrid() {
  return (
    <div className="w-full flex justify-center px-4 pb-8 md:pb-15">
      <div
        className="w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-70 sm:-mt-50 md:-mt-20 lg:-mt-10 "
        style={{ zIndex: 10}}
      >
        {cards.map(({ id, img, title, text }) => (
          <div
            key={id}
            className="bg-[#E3E3E3] p-6 min-h-[220px] flex flex-col"
          >
            <img
              src={img}
              alt={title}
              className={`${imgClass[id]} mb-4`}
            />
            <h3 className="whitespace-pre-line text-2xl md:text-3xl text-[#EF4123] font-semibold mb-2">
              {title}
            </h3>
            <p className="text-sm md:text-base text-[#EF4123] leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
