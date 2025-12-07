"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiMapPin } from "react-icons/fi";
import { GiCricketBat } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { HiUsers, HiHeart } from "react-icons/hi";
import { FiMic, FiAward } from "react-icons/fi";
import Navigation from "@/components/Navigation";

export interface HobbyPhoto {
  id: string;
  url: string;
  alt: string;
  caption: string;
  date?: string;
  location?: string;
  event?: string;
}

const booksData = {
  introduction:
    "Reading is a cornerstone of my personal growth journey. I believe in the power of books to transform mindsets, build better habits, and provide frameworks for navigating life's challenges.",
  books: [
    {
      id: "1",
      title: "Atomic Habits",
      author: "James Clear",
      imageUrl: "/Volunteering/Books/Atomic-Habits.jpeg",
      category: "Self-Improvement",
      keyTakeaway:
        "Small habits compound into remarkable results. Focus on systems, not goals.",
    },
    {
      id: "2",
      title: "Stop Overthinking",
      author: "Nick Trenton",
      imageUrl: "/Volunteering/Books/Stop-Overthinking.jpeg",
      category: "Mental Health",
      keyTakeaway:
        "Techniques to break free from analysis paralysis and reduce anxiety.",
    },
  ],
};

const cricketData = {
  introduction:
    "Cricket has been a passion of mine for over a decade. From playing in local tournaments to weekend matches with friends, the sport has taught me teamwork, strategy, and perseverance.",
  profileUrl:
    "https://play.cricket.com.au/player/0a50d9d8-785e-46b7-be3d-05b804a61d49/manish-mitra?tab=career",
  position: "All-rounder",
  batting: {
    innings: 129,
    runs: 2845,
    average: 25.63,
    highScore: 100,
    hundreds: 1,
    fifties: 16,
  },
  bowling: {
    wickets: 61,
    average: 20.69,
    bestBowling: "4/21",
    economy: 5.21,
  },
  fielding: {
    catches: 39,
    runOuts: 5,
  },
  stats: {
    matchesPlayed: 138,
  },
  photos: [
    {
      id: "1",
      url: "/Volunteering/Cricket/Cricket.jpeg",
      alt: "Cricket match action",
      caption: "On the pitch - playing the game I love",
      location: "Melbourne",
      event: "Club Cricket",
    },
    {
      id: "2",
      url: "/Volunteering/Cricket/Award1.jpeg",
      alt: "Cricket award ceremony",
      caption: "Season award recognition",
      location: "Melbourne",
      event: "Season Awards",
    },
    {
      id: "3",
      url: "/Volunteering/Cricket/Award2.jpeg",
      alt: "Cricket achievement award",
      caption: "Celebrating cricket achievements",
      location: "Melbourne",
      event: "Awards Night",
    },
  ],
};

const communityEventsData = {
  introduction:
    "I'm passionate about giving back to the community through knowledge sharing and charitable initiatives.",
  events: [
    {
      id: "1",
      title: "Event Driven Architecture Talk",
      type: "speaking",
      description:
        "Presented on Event Driven Architectures at Dius panel discussion.",
      imageUrl: "/Volunteering/Community-Events/Event Driven Architectures.jpeg",
      venue: "Tech Meetup",
      icon: FiMic,
    },
    {
      id: "2",
      title: "Dius Panel Discussion",
      type: "speaking",
      description:
        "Participated in panel discussion on modern software architecture patterns.",
      imageUrl:
        "/Volunteering/Community-Events/Dius Panel on Event Driven Arc.jpeg",
      venue: "Dius Melbourne",
      icon: HiUsers,
    },
    {
      id: "3",
      title: "Can for Cancer Walk",
      type: "charity",
      description: "Participated in the charity walk, raising awareness for cancer research.",
      imageUrl: "/Volunteering/Community-Events/Can-for-Cancer-Walk.jpeg",
      venue: "Melbourne",
      icon: HiHeart,
    },
    {
      id: "4",
      title: "BSM Melbourne Website",
      type: "award",
      description:
        "Built and launched the BSM Melbourne community website.",
      imageUrl: "/Volunteering/Community-Events/BSM.jpeg",
      venue: "BSM Melbourne",
      icon: FiAward,
    },
  ],
};

export default function HobbiesPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<HobbyPhoto | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo: HobbyPhoto, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % cricketData.photos.length
        : (currentIndex - 1 + cricketData.photos.length) %
        cricketData.photos.length;
    setCurrentIndex(newIndex);
    setSelectedPhoto(cricketData.photos[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      <section className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
              Beyond Code
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
              Hobbies &{" "}
              <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                Interests
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Exploring passions that shape who I am beyond the professional
              world.
            </p>
          </motion.div>

          {/* Cricket Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                <GiCricketBat size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">Cricket</h2>
            </div>

            {/* Stats Card */}
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {cricketData.stats.matchesPlayed} Matches
                  </h3>
                  <p className="text-gray-500 text-sm">Career Statistics</p>
                </div>
                <a
                  href={cricketData.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 text-sm"
                >
                  View Full Profile →
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Batting */}
                <div className="bg-gray-700/30 rounded-xl p-4">
                  <h4 className="text-primary-400 font-medium text-sm uppercase tracking-wide mb-3">
                    Batting
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {cricketData.batting.runs}
                      </div>
                      <div className="text-xs text-gray-500">Runs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {cricketData.batting.average}
                      </div>
                      <div className="text-xs text-gray-500">Average</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">
                        {cricketData.batting.highScore}
                      </div>
                      <div className="text-xs text-gray-500">High Score</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">
                        {cricketData.batting.hundreds}/{cricketData.batting.fifties}
                      </div>
                      <div className="text-xs text-gray-500">100s/50s</div>
                    </div>
                  </div>
                </div>

                {/* Bowling */}
                <div className="bg-gray-700/30 rounded-xl p-4">
                  <h4 className="text-primary-400 font-medium text-sm uppercase tracking-wide mb-3">
                    Bowling
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {cricketData.bowling.wickets}
                      </div>
                      <div className="text-xs text-gray-500">Wickets</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {cricketData.bowling.average}
                      </div>
                      <div className="text-xs text-gray-500">Average</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">
                        {cricketData.bowling.bestBowling}
                      </div>
                      <div className="text-xs text-gray-500">Best</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">
                        {cricketData.bowling.economy}
                      </div>
                      <div className="text-xs text-gray-500">Economy</div>
                    </div>
                  </div>
                </div>

                {/* Fielding */}
                <div className="bg-gray-700/30 rounded-xl p-4">
                  <h4 className="text-primary-400 font-medium text-sm uppercase tracking-wide mb-3">
                    Fielding
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {cricketData.fielding.catches}
                      </div>
                      <div className="text-xs text-gray-500">Catches</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {cricketData.fielding.runOuts}
                      </div>
                      <div className="text-xs text-gray-500">Run Outs</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">
                        {cricketData.batting.innings}
                      </div>
                      <div className="text-xs text-gray-500">Innings</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">
                        {cricketData.position}
                      </div>
                      <div className="text-xs text-gray-500">Role</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cricketData.photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-gray-700/50 hover:border-primary-500/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all duration-300"
                  onClick={() => openLightbox(photo, index)}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white font-medium text-sm">
                      {photo.caption}
                    </p>
                    {photo.location && (
                      <p className="text-gray-300 text-xs mt-1 flex items-center gap-1">
                        <FiMapPin size={10} /> {photo.location}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Books Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <IoBookSharp size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">Books I&apos;m Reading</h2>
            </div>

            <p className="text-gray-400 mb-6 max-w-2xl">
              {booksData.introduction}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {booksData.books.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-primary-500/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all duration-300 overflow-hidden"
                >
                  <div className="flex gap-4 p-4">
                    <div className="w-24 h-36 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-primary-500/20 to-purple-500/20">
                      <img
                        src={book.imageUrl}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-primary-400 font-medium">
                        {book.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1 group-hover:text-primary-400 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-2">
                        by {book.author}
                      </p>
                      <p className="text-gray-400 text-xs italic line-clamp-2">
                        &quot;{book.keyTakeaway}&quot;
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Community Events Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <HiUsers size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">Community Events</h2>
            </div>

            <p className="text-gray-400 mb-6 max-w-2xl">
              {communityEventsData.introduction}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {communityEventsData.events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-primary-500/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                      className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${event.type === "speaking"
                          ? "bg-blue-500/80 text-white"
                          : event.type === "award"
                            ? "bg-yellow-500/80 text-white"
                            : "bg-pink-500/80 text-white"
                        }`}
                    >
                      <event.icon size={12} />
                      {event.type === "speaking"
                        ? "Speaking"
                        : event.type === "award"
                          ? "Award"
                          : "Charity"}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <FiMapPin size={10} />
                      {event.venue}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 bg-gradient-to-br from-primary-500/10 via-purple-500/5 to-cyan-500/10 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Share common interests?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Whether it&apos;s cricket, tech, or community events - let&apos;s connect!
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all hover:bg-gray-100"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <FiX size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto("prev");
              }}
              className="absolute left-4 text-white hover:text-primary-400 transition-colors z-10"
              aria-label="Previous photo"
            >
              <FiChevronLeft size={48} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto("next");
              }}
              className="absolute right-4 text-white hover:text-primary-400 transition-colors z-10"
              aria-label="Next photo"
            >
              <FiChevronRight size={48} />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-bold mb-2">
                  {selectedPhoto.caption}
                </h3>
                {selectedPhoto.location && (
                  <div className="flex items-center justify-center gap-1 text-gray-400 text-sm">
                    <FiMapPin size={14} />
                    <span>{selectedPhoto.location}</span>
                  </div>
                )}
                <p className="text-gray-500 text-xs mt-4">
                  {currentIndex + 1} / {cricketData.photos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
