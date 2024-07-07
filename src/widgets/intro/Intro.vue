<template>
  <section id="intro" class="py-10 bg-white/[0.03]">
    <div class="container">
      <div class="flex flex-wrap sm:flex-nowrap items-start gap-x-7 gap-y-4">
        <div class="sm:sticky sm:top-[calc(var(--header-sticky-height)+1rem)]">
          <div class="relative w-[100px] lg:w-60 rounded-md">
            <img
              class="rounded-md"
              src="/static/images/content/my-photo.jpg"
              alt="avatar"
            />
          </div>
        </div>
        <!--begin::Info-->
        <div class="grow min-w-0 flex flex-col gap-4">
          <!--begin::Title-->
          <div class="flex justify-between items-start flex-wrap">
            <!--begin::User-->
            <div class="flex flex-col gap-2">
              <!--begin::Name-->
              <div class="flex items-center">
                <h2 class="text-3xl lg:text-4xl">
                  {{ appConfig.initials }}
                </h2>
              </div>
              <!--end::Name-->

              <!--begin::Info-->
              <div class="flex flex-wrap text-sm gap-x-4 gap-y-2">
                <div class="flex items-center gap-1 text-muted-foreground">
                  <span class="icon-[uil--user-md]"></span>
                  Senior Frontend Engineer
                </div>
                <div class="flex items-center gap-1 text-muted-foreground">
                  <span class="icon-[uil--location-point]"></span>
                  {{ appConfig.address }}
                </div>
                <div
                  href="#"
                  class="flex items-center gap-1 text-muted-foreground"
                >
                  <span class="icon-[uil--envelope]"></span>
                  {{ appConfig.email }}
                </div>
              </div>
              <!--end::Info-->
            </div>
            <!--end::User-->
          </div>
          <!--end::Title-->

          <!--begin::Stats-->
          <div class="flex flex-col flex-grow-1">
            <div class="flex flex-wrap gap-3">
              <!--begin::Stat-->
              <div
                class="border border-border border-dashed rounded min-w-[125px] py-3 px-4"
              >
                <div class="flex items-center">
                  <div class="text-xl xl:text-2xl font-bold">9+ years</div>
                </div>
                <div class="text-sm text-muted-foreground">
                  Total development experience
                </div>
              </div>
              <!--end::Stat-->
              <!--begin::Stat-->
              <div
                class="border border-border border-dashed rounded min-w-[125px] py-3 px-4"
              >
                <div class="flex items-center">
                  <div class="text-xl xl:text-2xl font-bold">7+ years</div>
                </div>
                <div class="text-sm text-muted-foreground">
                  Commercial Frontend experience
                </div>
              </div>
              <!--end::Stat-->
              <!--begin::Stat-->
              <div
                class="border border-border border-dashed rounded min-w-[125px] grow-[0.35] py-3 px-4"
              >
                <div class="flex items-center">
                  <div class="text-xl xl:text-2xl font-bold">100+</div>
                </div>
                <div class="text-sm text-muted-foreground">Projects</div>
              </div>
              <!--end::Stat-->
            </div>
          </div>
          <!--end::Stats-->

          <!--begin::Description-->
          <div
            class="prose prose-invert prose-ul:list-disc prose-ul:pl-[0.9em] max-w-full inline leading-normal break-words min-w-0 [word-break:break-word]"
          >
            <p>
              I am a frontend enthusiast who enjoys working with web
              technologies such as <strong>HTML, Javascript, CSS</strong>.
            </p>
            <ul>
              <li>
                <strong>Responsive design</strong> principles and
                <strong>cross-browser compatibility</strong> are my daily
                companions.
              </li>
              <li>
                As a <strong>team player</strong> I love to work with designers,
                backend developers, and other stakeholders.
              </li>
              <li>
                I have a lot of experience working with frontend frameworks like
                <strong>React</strong> and <strong>Vue</strong>!
              </li>
              <li>
                <strong>Newes trends</strong> and technologies are my daily
                bread and butter.
              </li>
            </ul>
            <p>
              <strong>
                Feel free to reach out if you have any questions or would like
                to work together!</strong
              >
            </p>
          </div>
          <!--end::Description-->
        </div>
        <!--end::Info-->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { appConfig } from '@/shared/config/app-config';
</script>
