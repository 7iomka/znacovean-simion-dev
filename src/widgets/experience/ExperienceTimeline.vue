<template>
  <div class="experience-timeline">
    <div class="container">
      <h2 class="text-3xl lg:text-4xl font-normal">Experience</h2>
      <Timeline class="mt-8 lg:mt-9">
        <template v-for="group in groupedExperience" :key="group.year">
          <TimelineGroup :label="`${group.year}`">
            <template v-for="item in group.items" :key="item.id">
              <TimelineItem>
                <template #icon>
                  <span
                    :class="[
                      item.technologies[0]
                        ? `icon-bg ${technologyIconsMap[item.technologies[0]]}`
                        : technologyIconsMap.default,
                    ]"
                  ></span>
                </template>
                <template #default>
                  <div class="experience-timeline__content">
                    <div class="experience-timeline__header">
                      <span class="experience-timeline__position">{{
                        item.position
                      }}</span>
                      <span class="experience-timeline__dates">
                        {{ formatDate(item.startDate) }} -
                        {{ formatDate(item.endDate) }}
                      </span>
                    </div>
                    <div class="experience-timeline__company">
                      {{ item.companyName }}
                    </div>

                    <div class="experience-timeline__description">
                      {{ item.description }}
                    </div>
                  </div>
                </template>
              </TimelineItem>
            </template>
          </TimelineGroup>
        </template>
      </Timeline>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useUnit } from 'effector-vue/composition';
  import { $$experience } from './experience.model';
  import { formatDate, technologyIconsMap } from './experience.lib';
  import { Timeline, TimelineGroup, TimelineItem } from '@/shared/ui/timeline';

  const groupedExperience = useUnit($$experience.$groupedItems);
</script>

<style scoped>
  .experience-timeline {
    padding: 40px 0;
  }

  .experience-timeline__header {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    flex-direction: column;

    @screen md {
      flex-direction: row;
      align-items: center;
    }
  }

  .experience-timeline__position {
    font-size: var(--font-size-base);
    font-weight: 600;
  }

  .experience-timeline__company {
    font-size: var(--font-size-sm);
    color: hsl(var(--muted-foreground));
    margin-top: 4px;
  }

  .experience-timeline__dates {
    color: hsl(var(--muted-foreground));
    font-size: var(--font-size-xs);
  }

  .experience-timeline__description {
    margin-top: 16px;
    font-size: var(--font-size-sm);
  }
</style>
