export default defineEventHandler(async e => {
    const config = useRuntimeConfig();

    const result = await $fetch('https://api.api-ninjas.com/v1/counter?id=starrail&hit=true', {
        headers: {
            "X-Api-Key": config.COUNTER_KEY,
            "Content-Type": "application/json"
        }
    });

    return result;
});