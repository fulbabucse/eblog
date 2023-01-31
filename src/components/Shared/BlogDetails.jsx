import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative px-4 lg:px-0">
          <img
            src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            className="w-full object-cover lg:rounded"
            alt=""
          />
          <div className="lg:absolute lg:-bottom-10 bg-white lg:w-5/6 py-5">
            <p className="bg-gray-800 text-white px-2 py-1 w-32 grid justify-center mb-2 rounded-md text-sm">
              STREET STYLE
            </p>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 leading-tight">
              She projection advantages resolution son indulgence. Part sure on
              no long life am at ever. In songs above he as drawn to. Gay was
              outlived peculiar rendered led six.
            </h2>
            <div className="flex items-center gap-4 text-sm mt-1">
              <p>30 Jan 2023</p>
              <span>|</span>
              <p>10 Comments</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 lg:mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">
              Advantage old had otherwise sincerity dependent additions. It in
              adapted natural hastily is justice. Six draw you him full not mean
              evil. Prepare garrets it expense windows shewing do an. She
              projection advantages resolution son indulgence. Part sure on no
              long life am at ever. In songs above he as drawn to. Gay was
              outlived peculiar rendered led six.
            </p>

            <p className="pb-6">
              Difficulty on insensible reasonable in. From as went he they.
              Preference themselves me as thoroughly partiality considered on in
              estimating. Middletons acceptance discovered projecting so is so
              or. In or attachment inquietude remarkably comparison at an. Is
              surrounded prosperous stimulated am me discretion expression. But
              truth being state can she china widow. Occasional preference fat
              remarkably now projecting uncommonly dissimilar. Sentiments
              projection particular companions interested do at my delightful.
              Listening newspaper in advantage frankness to concluded unwilling.
            </p>

            <p className="pb-6">
              Adieus except say barton put feebly favour him. Entreaties
              unpleasant sufficient few pianoforte discovered uncommonly ask.
              Morning cousins amongst in mr weather do neither. Warmth object
              matter course active law spring six. Pursuit showing tedious
              unknown winding see had man add. And park eyes too more him.
              Simple excuse active had son wholly coming number add. Though all
              excuse ladies rather regard assure yet. If feelings so prospect no
              as raptures quitting.
            </p>

            <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
              Sportsman do offending supported extremity breakfast by listening.
              Decisively advantages nor expression unpleasing she led met.
              Estate was tended ten boy nearer seemed. As so seeing latter he
              should thirty whence. Steepest speaking up attended it as. Made
              neat an on be gave show snug tore.
            </div>

            <p className="pb-6">
              Exquisite cordially mr happiness of neglected distrusts.
              Boisterous impossible unaffected he me everything. Is fine loud
              deal an rent open give. Find upon and sent spot song son eyes. Do
              endeavor he differed carriage is learning my graceful. Feel plan
              know is he like on pure. See burst found sir met think hopes are
              marry among. Delightful remarkably new assistance saw literature
              mrs favourable.
            </p>

            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              Uneasy barton seeing remark happen his has
            </h2>

            <p className="pb-6">
              Guest it he tears aware as. Make my no cold of need. He been past
              in by my hard. Warmly thrown oh he common future. Otherwise
              concealed favourite frankness on be at dashwoods defective at.
              Sympathize interested simplicity at do projecting increasing
              terminated. As edward settle limits at in.
            </p>

            <p className="pb-6">
              Dashwood contempt on mr unlocked resolved provided of of. Stanhill
              wondered it it welcomed oh. Hundred no prudent he however smiling
              at an offence. If earnestly extremity he he propriety something
              admitting convinced ye. Pleasant in to although as if differed
              horrible. Mirth his quick its set front enjoy hoped had there. Who
              connection imprudence middletons too but increasing celebrated
              principles joy. Herself too improve gay winding ask expense are
              compact. New all paid few hard pure she.
            </p>

            <p className="pb-6">
              Breakfast agreeable incommode departure it an. By ignorant at on
              wondered relation. Enough at tastes really so cousin am of.
              Extensive therefore supported by extremity of contented. Is
              pursuit compact demesne invited elderly be. View him she roof tell
              her case has sigh. Moreover is possible he admitted sociable
              concerns. By in cold no less been sent hard hill.
            </p>

            <p className="pb-6">
              Detract yet delight written farther his general. If in so bred at
              dare rose lose good. Feel and make two real miss use easy.
              Celebrated delightful an especially increasing instrument am.
              Indulgence contrasted sufficient to unpleasant in in insensible
              favourable. Latter remark hunted enough vulgar say man. Sitting
              hearted on it without me.
            </p>
          </div>

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt=""
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    Fahim Islam
                  </p>
                  <p className="font-semibold text-gray-600 text-xs">
                    {" "}
                    Author{" "}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 py-3">
                Mike writes about technology Yourself required no at thoughts
                delicate landlord it be. Branched dashwood do is whatever it.
              </p>
              <button className="px-2 py-1 text-gray-100 bg-slate-700 flex w-full items-center justify-center rounded">
                Follow
                <i className="bx bx-user-plus ml-2"></i>
              </button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
              <h1>Tags:</h1>
              <li className="list-none">
                <Link className="border border-gray-200 hover:bg-gray-100 transition-all duration-150 ease-linear capitalize text-gray-800 py-1.5 px-3">
                  Street style
                </Link>
              </li>
              <li className="list-none">
                <Link className="border border-gray-200 hover:bg-gray-100 transition-all duration-150 ease-linear capitalize text-gray-800 py-1.5 px-3">
                  Fashion week
                </Link>
              </li>
              <li className="list-none">
                <Link className="border border-gray-200 hover:bg-gray-100 transition-all duration-150 ease-linear capitalize text-gray-800 py-1.5 px-3">
                  Lifestyle
                </Link>
              </li>
              <li className="list-none">
                <Link className="border border-gray-200 hover:bg-gray-100 transition-all duration-150 ease-linear capitalize text-gray-800 py-1.5 px-3">
                  Beauty
                </Link>
              </li>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;
