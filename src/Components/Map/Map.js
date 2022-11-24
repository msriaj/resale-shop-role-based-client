import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="w-10/12 px-5 py-24 mx-auto flex justify-between ">
          <div class="w-full md:w-1/2 flex flex-col  justify-center">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
                Moon hashtag pop-up try-hard offal truffaut
              </h1>
              <div class="leading-relaxed">
                Pour-over craft beer pug drinking vinegar live-edge gastropub,
                keytar neutra sustainable fingerstache kickstarter.
              </div>
            </div>
            <div className="flex">
              {" "}
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p class="leading-relaxed">Users</p>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  1.8K
                </h2>
                <p class="leading-relaxed">Subscribes</p>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  35
                </h2>
                <p class="leading-relaxed">Downloads</p>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
                <p class="leading-relaxed">Products</p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 flex justify-center items-center">
            <svg
              enable-background="new 0 0 435 600"
              viewBox="0 0 335 400"
              height="600"
              width="435"
              y="0px"
              x="0px"
              xmlns="http://www.w3.org/2000/svg"
              id="country-bangladesh"
              version="1.1"
            >
              <path
                title="Dhaka"
                d="M180.286,101.943c-0.105,2.158-2.341,17.521,0.83,18.306c10.762,2.667,10.35,5.256,10.742,12.013c1.583,0.938,2.844,0.848,4.679,1.072c3.305,2.293-4.025,3.261-1.685,6.644c1.961,2.833-0.523,7.805-1.354,9.29c1.556,0.715,4.087,0.222,4.444,2.308c0.212,1.241-2.829,6.069-5.204,9.041c-15.791,6.453-6.436,12.478-15.275,23.543c-3.595,3.902-2.933,3.189-7.678,4.238c-4.118,0.911-7.208,4.576-7.933,8.251c-1.162,5.876-0.778,15.41-0.479,15.239c-8.287,4.739-9.936,13.847-1.432,20.95c-1.083,2.517-7.618,6.078-7.435,8.036c-1.411,0.199-15.296-2.004-15.577,1.078c-0.299,0.53-0.701,1.493-0.701,1.493s3.76,3.647,1.873,4.912c-1.922,1.286-4.169-7.056-3.144-9.481c-3.266,0.56-15.264,10.967-18.584,16.512c-5.271-3.011-12.043-10.076-13.782-15.677c0-1.601,4.751-0.326,4.426-3.85c0.146,1.585-7.343-3.597-7.228-4.774c0.122-1.236,1-1.31,1.816-1.97c-1.442,1.164-6.762-6.781-3.575-7.847c6.107-2.035-6.963-8.924-6.319-6.989c-4.719-12.004-15.734-16.474-7.405-27.335c4.921,8.786,21.081,11.594,25.659,7.226c2.934-2.087-4.352-11.403-4.509-11.71c-2.116-4.145,4.553-4.774,5.288-13.1c0.807-9.135-4.286-16.097-2.212-21.338c1.421-3.588,5.531-15.749,3.733-19.409c-1.126-2.289-5.023-1.212-7.025-4.122c-1.51-2.197-1.575-6.473-1.569-10.51c0.005-3.525-0.128-7.092,0.028-8.711c0.336-3.472,8.535-2.837,8.021-9.461c-0.318-4.088-1.806-7.359,1.058-7.324C112.677,104.131,167.9,105.66,180.286,101.943z"
                data-location-id="1"
                id="division-dhaka"
                class="region "
              />

              <path
                title="Chittagong"
                d="M183.375,313.922c0.007,0.008,0.022-0.027,0.044-0.094C183.372,313.86,183.348,313.893,183.375,313.922z M189.088,289.404c-3.299,0-3.706,18.468-3.783,18.252C192.472,301.528,202.369,289.404,189.088,289.404z M183.419,313.828c0.579-0.398,6.298-0.993,6.286-1.183C185.619,305.029,183.736,312.871,183.419,313.828z M184.378,285.77c0.162,0.69,0.353,4.201,0.927,4.602C186.456,291.173,188.008,283.96,184.378,285.77z M182.563,280.975c-1.51-1.284-3.328-5.999-7.914-3.752C174.649,278.656,181.556,282.433,182.563,280.975z M181.212,284.803c-1.155,0.253,0.453,5.916,1.93,5.916C183.142,290.719,184.301,284.123,181.212,284.803z M184.185,294.47c-0.734-2.598-7.027,13.265-5.675,15.469C181.512,303.845,185.349,298.586,184.185,294.47z M156.708,246.635c3.296,0,4.767-0.474,3.591-4.834C157.346,240.009,156.17,244.476,156.708,246.635z M202.177,281.979c7.205,1.028,5.285-5.771,4.247-7.115C204.285,274.804,201.6,279.669,202.177,281.979z M218.47,288.205c1.781-2.338-0.146-6.398-1.775-8.197C205.935,268.395,214.437,293.497,218.47,288.205z M283.941,352.213c0.304-4.854-1.713-11.725-0.988-17.381c1.449-11.302-1.156-23.466-2.399-28.747c0,0,2.062-0.143,1.458-13.301c-0.386-8.417-9.288-27.245-6.961-33.871c0.362-1.034-5.431-17.11-5.384-17.055c-3.493-4.074,0.195-13.236,0.195-17.811c0-2.147-6.808-25.107-6.742-25.093c-1.178,1.411-2.208,2.924-3.089,4.543c-0.566,0.047-1.479-4.871-2.799-5.376c-3.316-1.269-4.232,5.538-6.814,5.917c-2.937,0.431-4.589-4.104-5.984-5.588c3.704,3.938-4.261,18.308-6.775,21.486c-5.755,7.272-4.737,18.061-4.725,25.054c0.004,2.646-10.793,5.941-10.894,5.336c-0.141-0.854-4.622-7.098-5.629-9.401c-1.38-3.157-3.403-13.826-8.366-9.006c-0.707,0.968,1.567,12.965,0.907,12.762c-4.372-1.342-8.36-19.598-4.98-21.288c0-2.282-7.787-14.183-9.529-18.422c-0.036,0.121-0.071,0.065-0.104-0.256c0.03,0.08,0.068,0.169,0.104,0.256c0.204-0.685,0.417-7.252,0.002-6.369c-0.029,0.084-0.063,0.168-0.086,0.254c0.031-0.12,0.06-0.198,0.086-0.254c0.827-2.384,4.277-4.518,5.782-7.46c-0.525-4.786,1.458-3.307,1.364-7.36c-3.345-2.394-2.681-15.906-1.332-17.265c-2.646,2.667-3.587,0.827-7.053-2.442c-14.473,5.947-2.912,8.998-13.777,22.601c-5.831,6.328-13.937,0.908-15.27,14.424c-0.033,0.339-1.538,13.592,0.83,11.949c-8.074,5.597-11.444,9.24-3.147,18.487c0.057-0.018,0.109-0.025,0.161-0.021c0.488,0.028,2.225,18.062,1.507,20.461c-1.628,5.45,3.002,3.869,5.252,6.77c3.583,4.622,20.332,29.059,25.81,26.714c2.967-2.051,8.895-33.117,18.361-18.579c8.562,13.147,19.139,18.611,21.22,36.274c0.801,6.795,9.876,15.563,6.98,23.449c0.035,1.069-2.369,3.5-3.36,6.098c-1.579,4.141,0.507,5.626,0.59,8.705c0.077,2.863-1.261,6.379,0.171,7.295c2.729-2.863,4.608-0.712,5.34-1.773c0.73-1.061,2.026-7.241,1.469-8.839c1.018,0,2.689-2.62,3.188-1.574c0.475,0.994-0.29,4.878-1.115,6.172c-0.825,1.293-0.546,5.117-3.308,7.854c-0.669,0.663,1.659,5.125,3.482,7.563c1.902,2.544,2.367,3.169,2.714,12.858c1.724,2.136,5.773,9.032,8.625,9.59c-0.919,4.597,7.311,18.626,8.537,17.398c1.227-1.227-3.891-10.114-4.652-12.522c-0.267-0.844-2.877-6.688,0.572-6.989c0.901-1.75-6.147-8.239-5.975-8.451c-0.425-13.218,4.594-17.397,11.383-19.636c1.071,6.744,1.476,7.184,10.16,6.609c3.102-0.205,0.908,9.619,5.231,7.263C285.773,363.36,289.662,362.727,283.941,352.213z M241.922,330.229c0.419-2.514,1.677-3.771,2.793-2.793c1.117,0.978,0.419,2.793-0.419,3.909C243.459,332.464,241.504,332.742,241.922,330.229z M243.459,335.535c-0.279-1.535,2.403-1.804,2.233-0.558C245.37,337.347,243.737,337.071,243.459,335.535z M237.399,320.622c-2.856,3.112-1.315,11.657-0.744,11.088C237.225,331.14,240.824,316.891,237.399,320.622z M209.396,272.272c1.289-0.946-1.188-9.192-5.512-2.806C203.025,270.737,208.355,273.039,209.396,272.272z M207.968,288.786c0.489,2.26,2.317-0.696,2.317-0.696C209.566,288.218,207.479,286.525,207.968,288.786z"
                data-location-id="2"
                id="division-chittagong"
                class="region"
              />

              <path
                title="Sylhet"
                d="M183.185,100.527c-0.106,2.202-2.387,16.735,0.847,17.537c10.98,2.721,10.676,5.82,11.076,12.716c1.616,0.958,3.36,1.55,5.231,1.778c4.059,3.142-4.469,4.026-2.061,7.466c1.544,2.206,0.24,8.441-1.406,7.899c1.012-0.395,1.629,0.186,2.714,0.181c3.831,3.831-2.017,12.736-4.15,14.579h-0.874c6.514,5.556,4.956-1.176,9.889-0.986c-1.912-0.074-4.108,17.784-0.764,20.178c0.167,7.125,4.307-4.638,5.024-7.729c0.718-3.091,10.782,1.351,15.69,0.686c0.735-0.91,3.126-6.645,3.126-6.645l5.481,4.018c0,0-1.631-4.987,1.67-5.667c3.301-0.681,7.404,4.538,7.869,4.933c0.416-1.753,3.075-8.888,3.075-8.888s-3.254-0.43-1.418-3.251c1.837-2.822,3.98,1.594,4.651,1.149c0.669-0.444-1.099-2.881-0.575-3.63c0.523-0.749,5.632-0.622,6.587-0.662c2.64-0.109,2.448-2.359,2.47-3.727c0.015-1.008,0.052-5.925,0.052-5.925s1.595,0.167,2.521-0.666s5.414-14.594,5.51-18.36c0.097-3.765-2.272-6.873-2.664-7.714c1.483-0.19,10.683,3.979,11.279,4.29c1.264,0.655,6.446-2.923,6.19-3.756C261.382,98.005,238.317,99.56,224.059,104c1.046-0.564-13.185-1.958-13.678-2.555c-4.379-5.317-23.231-2.37-28.07-0.917H183.185z"
                data-location-id="3"
                id="division-sylhet"
                class="region"
              />

              <path
                title="Khulna"
                d="M95.131,325.247c0.357,0.33-1.542,5.69,1.515,7.314C97.708,333.127,98.682,329.771,95.131,325.247z M64.371,319.374c0.235-0.035-0.414,12.693,5.486,12.693C67.658,329.543,65.933,320.967,64.371,319.374z M81.347,187.048c-8.523,13.277,4.219,18.069,7.839,28.952c-0.645-1.935,10.521,3.946,5.871,5.087c-3.263,0.8,1.573,9.796,3.015,8.628c-0.817,0.662-1.022,0.735-1.144,1.971c-0.117,1.177,6.253,6.137,6.106,4.552c-1.13,2.737-3.996,0.793-4.09,2.389c1.13,4.573,6.286,10.877,10.509,14.643c3.584,3.198,6.128,5.35,5.629,7.651c-3.295,12.348,3.551,12.665-1.24,22.646c-0.584-1.251-3.624-4.954-4.295-3.946c-0.673,1.008,4.132,6.927,5.601,9.418c-2.031,4.064-0.895,14.249-4.966,20.596c1.078,1.078,6.454,7.755,2.068,14.551c-5.113,0.306-7.111-6.8-4.841-11.576c-3.487,7.078-4.407,11.994-4.407,11.994s-2.102-3.476,2.08-16.275c-2.118,1.676-2.102,7.515-3.931,9.501c-1.371,1.488-2.79-1.778-3.161-0.273c1.669,2.505,2.507,7.619,3.434,11.384c0.973,3.954-5.542-3.953-6.121-5.48c-2.956-7.82,7.027-15.051,1.946-22.014c-1.01-3.038,4.046-7.358,2.853-11.257c-1.965-6.414-2.348-14.867-6.123-18.828c3.449,5.209,1.347,44.326-0.946,41.647c-1.075-1.256-1.361-8.205-2.629-15.427c-1.764-10.03-4.389-20.935-4.389-20.935s1.281,11.226,2.982,20.731c1.235,6.903,2.746,12.767,1.379,13.413c1.485-0.703,2.802,14.028-0.407,8.472c-1.098-1.904-2.951-8.112-1.797-9.266c-2.928,2.935,3.076,13.181,0.036,14.209c2.013-6.17-0.629,5.676-3.005,7.846c-3.439-8.127,0.954-19.964,1.487-28.678c-0.373,0-4.272,2.299-4.061,2.245c0,3.285,2.322,6.467,0.303,9.739c-1.669-5.793-3.122-6.077-2.084-14.7c-4.84,10.498,5.065,12.922-0.692,22.945c0.111,1.375-2.11-8.616-5.208-16.277c-0.65,3.63-0.028,5.727,1.041,7.806c1.823,8.581,5.736,13.802,1.955,20.994c-2.901-2.106-4.645-10.284-3.053-15.783c0.328-1.13-2.923-2.171-3.633-2.733c-0.32-1.281,2.448-5.728,2.763-4.012c-0.054-0.303-5.214-7.851-5.069-7.939c-0.167,0.103,2.443,4.67,1.419,6.498c0.527,4.271-3.047,6.803,2.967,8.303c0.209,0.839-0.855,7.197-1.7,7.328c-6.021,0.924-5.266-19.495-5.682-22.135c2.604-3.91-5.733-8.478-4.325-10.985c0.521-0.925,2.544-39.057-7.434-43.163c-1.254-1.113,0.287-14.078,6.734-17.981c-5.506-0.208-15.784,0.413-17.347-5.4c-0.333-1.231,10.386-14.113,3.064-12.221c-12.175,3.15-9.011-23.785-10.367-25.145c8.013,8.037,10.061-19.151,10.061-19.151c8.251,4.276,12.695,0.993,17.88,8.422C67.214,188.097,74.725,184.959,81.347,187.048z"
                data-location-id="4"
                id="division-khulna"
                class="region"
              />

              <path
                title="Barishal"
                d="M151.139,324.855c0.178,1.409,2.688-0.019,2.688-0.986C153.826,323.869,150.778,322.042,151.139,324.855z M165.706,321.975c0.5,0.633,4.367-2.907,1.854-3.145C166.123,318.711,164.625,320.619,165.706,321.975z M159.349,320.003c1.052,0.177,5.486-3.805,4.618-4.395C165.982,316.492,159.349,313.059,159.349,320.003z M159.425,314.016C153.444,334.201,153.879,305.115,159.425,314.016L159.425,314.016z M158.631,297.72c-0.871,0-2.749,2.365-1.703,2.729C162.069,302.242,158.808,297.214,158.631,297.72L158.631,297.72z M156.813,301.968c4.311-3.449-3.225,16.028-4.237,12.997C149.854,306.803,156.813,301.968,156.813,301.968z M149.7,310.381c2.455-0.358-2.497,12.729-6.884,13.377C137.234,324.58,147.246,310.739,149.7,310.381z M157.834,255.582c-14.978,2.312,3.601,2.96,4.39,3.753C161.032,258.138,159.312,256.608,157.834,255.582L157.834,255.582z M172.743,283.928c1.567,5.89-0.56,13.637-1.515,19.593c-0.612,3.812-12.646,15.245-12.346,6.406c0.382-11.228,12.43-28.62-1.081-35.088c-2.297-1.095-2.262-12.555,0.791-13.89C159.968,260.347,170.286,281.765,172.743,283.928z M165.1,264.565c-1.906-0.108,1.118,5.938,2.194,5.76C168.371,270.146,168.879,265.995,165.1,264.565z M117.809,258.044c3.319-5.544,9.976-11.13,15.234-15.472c-0.149,2.323,2.678,9.748,5.164,8.28c3.585-2.117,2.475-6.838,0.501-7.28c-0.892-2.654,11.762-0.164,13.171-0.366c0.206,2.192,8.513,8.618,4.755,9.817c-3.179,1.014-6.097,1.576-6.933,4.833c-1.261,4.924,11.015,25.085,10.292,25.997c-2.129,2.689,1.866,8.946-2.32,12.622c-1.378,1.21-10.176,10.841-10.281,11.252c1.391-0.277-2.38,7.765-3.177,5.908c-1.339-3.125,3.919-12.941,2.57-17.314c1.541-0.243-13.448,47.4-18.917,25.429c-14.083,0,16.108-19.83,6.261-27.851c4.737,3.858-7.107,21.281-10.839,21.484c-3.908,0.213,6.301-24.701,6.847-27.7c-0.44,2.422-13.2,29.215-10.744,29.975c-14.692-4.28,5.54-38.021,4.199-43.391h-0.076c-0.586,1.768-5.048,18.634-7.501,11.175c0,0,4.312-2.778,1.081-14.195C115.597,265.941,118.617,261.349,117.809,258.044z"
                data-location-id="5"
                id="division-barishal"
                class="region"
              />

              <path
                title="Rajshahi"
                d="M101.537,110.256c0.54,4.61-2.087,10.041,1.343,14.162c1.737,4.241,5.975,3.469,6.886,4.945c2.021,3.278-2.598,14.141-3.595,17.489c-2.312,7.756,4.304,16.144,1.589,23.97c-0.588,4.794-5.115,6.665-5.222,9.33c-0.06,1.466,7.274,11.321,5.487,12.213c-6.506,4.513-20.113-2.376-23.176-8.663c-6.64-1.953-16.379,0.968-19.36-7.071c-4.626-6.421-10.666-4.259-18.916-8.534v0.448c-1.405-2.963,0.935-8.144-3.441-9.378c-12.934,0-23.215-5.866-34.411-13.49c-5.556-3.781-8.352-14.032-2.363-18.531c-0.23,1.138,5.154-11.509,3.31-9.379c5.868-6.781,7.19,6.677,11.502,3.979c5.506-3.449,7.752-14.449,6.647-22.164c0.343,2.4,23.907-0.702,24.662-0.365c8.696,3.888,3.13-1.479,9.822-4.303c2.279,0.968,9.563,1.418,11.239,3.1c3.61,3.623,4.595,10.284,11.534,12.338C88.363,111.326,97.072,110.992,101.537,110.256z"
                data-location-id="6"
                id="division-rajshahi"
                class="region"
              />

              <path
                title="Rangpur"
                d="M61.341,92.119c0,0-7.259,0.504-11.122-7.863c1.163-3.256-0.809-4.109-0.675-7.193c0.007-0.158-3.223,0.302-3.011,0.136c-5.53,4.343-14.539-0.455-18.671-6.571c-1.108-1.64-0.362-3.417-1.479-5.014c-1.419-2.031-4.835-3.858-7.806-5.701c-0.439-0.272-0.119-3.31-4.123-3.971c-1.831-0.303-4.267,2.122-5.21,1.546c-1.953-1.194-1.446-3.58-3.116-4.243c-1.668-0.662,0.732-12.128,5.283-13.793c-3.409-2.935,0.706-7.338,3.507-9.132c3.193-2.044,6.121-2.309,6.534-2.936c1.155-1.751,0.797-4.764,1.08-5.154c1.316-1.812,4.51-4.461,4.87-4.1c13.625,3.344-4.494-15.108-6.097-5.85C19.177,9.412,22.612,2.275,24.765,0c1.784,0.685,0.693,1.548,1.133,3.827c0.167,0.862,3.001,3.364,6.654,5.901c1.372,0.953,5.136,1.883,7.731,4.114c3.013,2.589,4.767,6.501,4.338,7.479c-0.645,1.466-2.368,0.151-3.147,0.541c-1.128,0.565-1.968,3.326-1.968,3.326s5.107-2.746,8.601-2.06c2.462,0.483,3.073,4.525,5.111,4.345c-0.998,0.088-0.523-2.458,0.767-3.291c1.504-0.971,9.358,7.318,10.88,0.206c0.449,2.07-7.35-4.782-8.114-7.507c1.195-0.985-0.107-3.243,1.713-4.203c6.874-3.63,11.562,23.333,18.513,27.204c0.357,0.2,0.766-0.482,1.235-0.193c0.32,0.197,6.444,5.189,6.892,3.732c0.08-0.26,1.885-3.474,2.703-2.243c2.478,3.728,11.614,3.742,8.996,4.814c0.474-0.194,3.425-8.984,3.552-8.816c1.869,2.459-2.898-3.067-2.162-3.751c0.849-0.789,1.449-3.692,4.884-5.414c-0.714,0.357,0.917,4.833,1.254,5.027c13.298,9.656,10.771,40.85,7.824,52.193c-4.865-0.835-4.015,3.281-3.25,9.075c0.886,6.718-7.912,2.646-7.819,12.784c-3.676,1.307-12.671,0.962-15.415,0.148c-7.081-2.096-6.934-8.461-10.618-12.157C73.343,93.364,63.667,93.107,61.341,92.119z"
                data-location-id="7"
                id="division-rangpur"
                class="region"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
