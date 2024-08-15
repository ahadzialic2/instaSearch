class SearchLogsController < ApplicationController
  def analytics
    @analytics_data = SearchLog.analytics
    render 'analytics'
  end
end
