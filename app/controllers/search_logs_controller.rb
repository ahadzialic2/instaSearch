class SearchLogsController < ApplicationController
  def analytics
    @search_logs = SearchLog.all
    #@search_logs_grouped_by_query = @search_logs.group_by(&:query)
    #@search_logs_grouped_by_query_count = @search_logs_grouped_by_query.map { |query, logs| [query, logs.count] }
    #@search_logs_grouped_by_query_count = @search_logs_grouped_by_query_count.sort_by { |query, count| count }.reverse

    @most_searched_term = SearchLog.group(:query).count.max_by { |_, count| count }&.first
    @total_searches = SearchLog.count
    @average_searches_per_user = @total_searches / SearchLog.distinct.count(:ip_address)
    @average_searches_per_day = @search_logs.count / @search_logs.map(&:created_at).map(&:to_date).uniq.count

    @most_searched_queries = @search_logs.group_by(&:query)
    @query_counts = {}
    @most_searched_queries.each do |query, logs|
      @query_counts[query] = logs.count
    end

    render 'analytics'
  end

  def index
    @search_logs = SearchLog.all
  end

end
