<template>
  <div id="experience-timeline" class="py-10 border border-border">
    <div class="container">
      <h2 class="text-3xl lg:text-4xl">Experience</h2>
      <Timeline class="mt-8 lg:mt-10">
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
                  <div class="experience-timeline-item">
                    <div class="experience-timeline-item__header">
                      <span class="experience-timeline-item__position">{{
                        item.position
                      }}</span>
                      <span class="experience-timeline-item__dates">
                        {{ formatDate(item.startDate) }} -
                        {{ formatDate(item.endDate) }}
                      </span>
                    </div>
                    <div class="experience-timeline-item__company">
                      {{ item.companyName }}
                    </div>

                    <div class="experience-timeline-item__description">
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
  .experience-timeline-item {
  }

  .experience-timeline-item__header {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    flex-direction: column;

    @screen md {
      flex-direction: row;
      align-items: center;
    }
  }

  .experience-timeline-item__position {
    font-size: var(--font-size-base);
    font-weight: 600;
  }

  .experience-timeline-item__company {
    font-size: var(--font-size-sm);
    color: hsl(var(--muted-foreground));
    margin-top: 6px;
  }

  .experience-timeline-item__dates {
    color: hsl(var(--muted-foreground));
    font-size: var(--font-size-xs);
  }

  .experience-timeline-item__description {
    margin-top: 16px;
    font-size: var(--font-size-sm);
  }
</style>
